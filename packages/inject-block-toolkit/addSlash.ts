export default function addSlash(str: string, quote: '"' | "'" | "`" = '"') {
  return str.replaceAll(quote, "\\" + quote);
}
