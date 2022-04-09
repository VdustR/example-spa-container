import type { BuiltInParserName } from "prettier";
import prettier from "prettier";

export default function format(input: string, parser: BuiltInParserName) {
  if (!parser) return input;
  try {
    return prettier.format(input, { parser });
  } catch (e) {
    return input;
  }
}
