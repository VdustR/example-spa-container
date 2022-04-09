import toBoolean from "inject-block-toolkit/serialize/toBoolean";
import toFloat from "inject-block-toolkit/serialize/toFloat";
import toInteger from "inject-block-toolkit/serialize/toInteger";
import toString from "inject-block-toolkit/serialize/toString";

declare global {
  interface Window {
    ENV_DATA: Record<string, string>;
  }
}

// INJECT_ENV START - Do not remove or modify this section
export const EMPTY = toString(window.ENV_DATA["EMPTY"]);
export const STR = toString(window.ENV_DATA["STR"]);
export const INT = toInteger(window.ENV_DATA["INT"]);
export const FLOAT = toFloat(window.ENV_DATA["FLOAT"]);
export const FORCE_FLOAT = toFloat(window.ENV_DATA["FORCE_FLOAT"]);
export const NAN = toInteger(window.ENV_DATA["NAN"]);
export const BOOL_TRUE = toBoolean(window.ENV_DATA["BOOL_TRUE"]);
export const BOOL_FALSE = toBoolean(window.ENV_DATA["BOOL_FALSE"]);
export const CDN = toString(window.ENV_DATA["CDN"]);
// INJECT_ENV END

export { toBoolean, toFloat, toInteger, toString };
