import toString from "./toString";

export default function toNumber(val: unknown): number {
  return val === ""
    ? NaN
    : typeof val === "number"
    ? val
    : typeof val === "string"
    ? Number.parseFloat(toString(val))
    : NaN;
}
