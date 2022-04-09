import toString from "./toString";

const allowPrimitive = [
  Infinity,
  "Infinity",
  NaN,
  "NaN",
  -Infinity,
  "-Infinity",
];

export default function toInteger(val: unknown): number {
  return val === ""
    ? NaN
    : allowPrimitive.includes(val as typeof allowPrimitive[number])
    ? Number(val)
    : ["number", "string"].includes(typeof val)
    ? Number.parseInt(toString(val), 10)
    : NaN;
}
