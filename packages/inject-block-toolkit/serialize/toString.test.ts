import { assert, describe, it } from "vitest";
import toString from "./toString";

describe("toString", () => {
  it('should return "true" for "true"', () => {
    assert.equal(toString("true"), "true");
  });
  it('should return "false" for "false"', () => {
    assert.equal(toString("false"), "false");
  });
  it('should return "1" for "1"', () => {
    assert.equal(toString("1"), "1");
  });
  it('should return "0" for "0"', () => {
    assert.equal(toString("0"), "0");
  });
  it('should return "+0" for "+0"', () => {
    assert.equal(toString("+0"), "+0");
  });
  it('should return "-0" for "-0"', () => {
    assert.equal(toString("-0"), "-0");
  });
  it('should return "-1" for "-1"', () => {
    assert.equal(toString("-1"), "-1");
  });
  it('should return "" for undefined', () => {
    assert.equal(toString(undefined), "");
  });
  it('should return "" for null', () => {
    assert.equal(toString(null), "");
  });
});
