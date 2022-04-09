import objectInspect from "object-inspect";

export default function inspect(val: unknown) {
  return objectInspect(val, {
    maxStringLength: Infinity,
    depth: Infinity,
    indent: 2,
  });
}
