export type EnvType = string | number | boolean;
export type BlockTerm = {
  start: string;
  end: string;
};

export type EnvRecord = Record<string, EnvType>;
