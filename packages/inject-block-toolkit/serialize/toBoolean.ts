export default function toBoolean(val: unknown): boolean {
  return ["false", "0"].includes(val as any) ? false : Boolean(val);
}
