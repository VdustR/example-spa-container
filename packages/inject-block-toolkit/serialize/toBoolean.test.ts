import { assert, describe, it } from "vitest";
import toBoolean from "./toBoolean";

describe("toBoolean", () => {
  it('should return true for "true"', () => {
    assert.equal(toBoolean("true"), true);
  });
  it('should return false for "false"', () => {
    assert.equal(toBoolean("false"), false);
  });
  it('should return true for "1"', () => {
    assert.equal(toBoolean("1"), true);
  });
  it('should return false for "0"', () => {
    assert.equal(toBoolean("0"), false);
  });
  it('should return true for "-1"', () => {
    assert.equal(toBoolean("-1"), true);
  });
  it("should return false for null", () => {
    assert.equal(toBoolean(null), false);
  });
  it("should return false for undefined", () => {
    assert.equal(toBoolean(undefined), false);
  });
  it("should return true for 1", () => {
    assert.equal(toBoolean(1), true);
  });
  it("should return false for 0", () => {
    assert.equal(toBoolean(0), false);
  });
  it("should return true for -1", () => {
    assert.equal(toBoolean(-1), true);
  });
  it("should return false for NaN", () => {
    assert.equal(toBoolean(NaN), false);
  });
  it("should return true for Infinity", () => {
    assert.equal(toBoolean(Infinity), true);
  });
  it('should return true for ""', () => {
    assert.equal(toBoolean(""), false);
  });
});
