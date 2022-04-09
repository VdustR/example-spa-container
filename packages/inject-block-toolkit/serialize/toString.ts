export default function toString(val: unknown): string {
  return [null, undefined].includes(val as any) ? "" : String(val);
}
