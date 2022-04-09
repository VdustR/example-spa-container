import addSlash from "./addSlash";
import format from "./format";
import injectBlock from "./injectBlock";
import wrapErrorHandler from "./wrapErrorHandler";
export * from "./constant";
export { addSlash, format, injectBlock, wrapErrorHandler };

const injectBlockToolkit = injectBlock;

export default injectBlockToolkit;
