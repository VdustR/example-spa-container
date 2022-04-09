import { readFile, writeFile } from "fs-extra";
import flow from "lodash/flow";
import mapKeys from "lodash/mapKeys";
import mapValues from "lodash/mapValues";
import snakeCase from "lodash/snakeCase";
import toUpper from "lodash/toUpper";
import objectInspect from "object-inspect";
import { basename, extname, resolve } from "path";
import type { BuiltInParserName } from "prettier";
import { format } from "prettier";
import addSlash from "./addSlash";
import { iniBlock, jsBlock } from "./constant";
import inspect from "./inspect";

const currentCwd = process.cwd();

export type FileType = "js" | "ini";
export type Line = (key: string, value: string) => string;
export type PrimitiveData = number | string | boolean;
export type ObjectData =
  | {
      type?: "integer";
      defaultValue: number;
    }
  | {
      type: "float";
      defaultValue: number;
    }
  | {
      type?: "string";
      defaultValue: string;
    }
  | {
      type?: "boolean";
      defaultValue: boolean;
    };
export type Data = PrimitiveData | ObjectData;
export type Env = Record<string, Data>;

export type InjectBlockOptions = {
  cwd?: string;
  filePath: string;
  type: FileType;
  format?: BuiltInParserName | undefined;
  content: string;
};

export async function injectBlock({
  cwd = currentCwd,
  filePath,
  type,
  format: formatParser,
  content,
}: InjectBlockOptions): Promise<void> {
  const { start: startStr, end: endStr } = type === "ini" ? iniBlock : jsBlock;
  const currentContent = await readFile(resolve(cwd, filePath), {
    encoding: "utf8",
  });
  const startStrIndex = currentContent.indexOf(startStr);
  if (startStrIndex === -1)
    throw new Error(
      `Cannot find ${objectInspect(startStr)} in ${objectInspect(filePath)}`
    );
  const startIndex = startStrIndex + startStr.length;
  const endIndex = currentContent.indexOf(endStr);
  if (endIndex <= startIndex)
    throw new Error(
      `Cannot find ${objectInspect(endStr)} in ${objectInspect(filePath)}`
    );
  const preStr = currentContent.substring(0, startIndex);
  const postStr = currentContent.substring(endIndex);
  const injectedContent = [preStr, content, postStr].join("\n");
  const formatted = formatParser
    ? format(injectedContent, { parser: formatParser })
    : injectedContent;
  await writeFile(resolve(cwd, filePath), formatted);
}

function toObjectData(dataArg: Data): ObjectData {
  const data: ObjectData =
    typeof dataArg === "object"
      ? (dataArg as ObjectData)
      : ({
          defaultValue: dataArg,
        } as ObjectData);
  return data;
}

function getType(dataArg: Data): NonNullable<ObjectData>["type"] {
  const data = toObjectData(dataArg);
  return data.type
    ? data.type
    : typeof data.defaultValue === "string"
    ? "string"
    : typeof data.defaultValue === "boolean"
    ? "boolean"
    : Number.isInteger(data.defaultValue) ||
      Number.isNaN(data.defaultValue) ||
      [Infinity, -Infinity].includes(data.defaultValue)
    ? "integer"
    : "float";
}

function getOptions(file: string): Pick<
  InjectBlockOptions,
  "type" | "format"
> & {
  toContent: (env: Env) => string;
} {
  if (extname(file) === ".html") {
    return {
      type: "js",
      format: "html",
      toContent: (env) => {
        return `window.ENV_DATA = ${inspect(
          mapValues(env, (_value, key) => `<%= VITE_${key} %>`)
        )};`;
      },
    };
  }
  if (extname(file) === ".ts") {
    return {
      type: "js",
      format: "typescript",
      toContent: (env) => {
        return Object.entries(env)
          .map(([key, dataArg]) => {
            const data = toObjectData(dataArg);
            const type = getType(data);
            return `export const ${key} = ${
              type === "float"
                ? "toFloat"
                : type === "integer"
                ? "toInteger"
                : type === "string"
                ? "toString"
                : "toBoolean"
            }(window.ENV_DATA["${addSlash(key)}"]);`;
          })
          .join("\n");
      },
    };
  }
  if (basename(file) === ".env") {
    return {
      type: "ini",
      toContent: (env) => {
        return Object.entries(env)
          .map(([key, dataArg]) => {
            const data = toObjectData(dataArg);
            return `VITE_${key}=${data.defaultValue || ""}`;
          })
          .join("\n");
      },
    };
  }
  if (basename(file) === ".env.production") {
    return {
      type: "ini",
      toContent: (env) => {
        return Object.entries(env)
          .map(([key]) => `VITE_${key}=\\\${${key}}`)
          .join("\n");
      },
    };
  }
  // Dockerfile
  return {
    type: "ini",
    toContent: (env) => {
      return Object.entries(env)
        .map(([key, dataArg]) => {
          const data = toObjectData(dataArg);
          return `ENV ${key} "${addSlash(data.defaultValue.toString())}"`;
        })
        .join("\n");
    },
  };
}

export default async function injectBlocks(
  envArg: Env,
  filesArg: string[] | string,
  {
    cwd = currentCwd,
  }: {
    cwd?: string;
  } = {}
) {
  const env = mapKeys(envArg, (_value, key) =>
    flow(() => snakeCase(key), toUpper)()
  );
  const files = Array.isArray(filesArg) ? filesArg : [filesArg];
  await Promise.all(
    files.map(async (file) => {
      try {
        const { type, format, toContent } = getOptions(file);
        await injectBlock({
          cwd,
          filePath: file,
          type,
          format,
          content: toContent(env),
        });
        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    })
  ).then((retArr) => {
    if (retArr.some((ret) => !ret)) {
      console.log("inject env failed!");
      process.exit(1);
    }
    console.log("inject env successfully!");
  });
}
