import type { BlockTerm } from "./type";

export const iniBlock: BlockTerm = {
  start: "# INJECT_ENV START - Do not remove or modify this section",
  end: "# INJECT_ENV END",
};

export const jsBlock: BlockTerm = {
  start: "// INJECT_ENV START - Do not remove or modify this section",
  end: "// INJECT_ENV END",
};
