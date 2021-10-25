declare global {
  interface Window {
    SERVER_DATA: Record<string, string | undefined>;
  }
}

export const foo = String(window.SERVER_DATA.foo);
export const bar = String(window.SERVER_DATA.bar);
export const num = Number(window.SERVER_DATA.num);
