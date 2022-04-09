export default function wrapErrorHandler<
  T extends (...args: unknown[]) => Promise<unknown>
>(fn: T): void {
  new Promise<unknown | void>(async (resolve) => {
    try {
      await fn();
    } catch (e) {
      console.trace(e);
      resolve(e);
      return;
    }
    resolve(true);
  });
}
