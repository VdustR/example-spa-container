import injectBlockToolkit from "inject-block-toolkit";

injectBlockToolkit(
  {
    empty: "",
    str: "theStr",
    int: 123,
    float: 3.14159,
    forceFloat: {
      type: "float",
      defaultValue: 100,
    },
    nan: NaN,
    boolTrue: true,
    boolFalse: false,
    cdn: "cdn.jsdelivr.net/npm",
  },
  [
    ".env",
    ".env.production",
    "index.html",
    "src/env.ts",
    "../../Dockerfile.vite",
  ]
);
