import { assert, describe, it } from "vitest";
import toFloat from "./toFloat";

describe("toFloat", () => {
  it('should return NaN for "true"', () => {
    assert.isNaN(toFloat("true"));
  });
  it('should return NaN for "false"', () => {
    assert.isNaN(toFloat("false"));
  });
  it('should return 1 for "1"', () => {
    assert.equal(toFloat("1"), 1);
  });
  it('should return 0 for "0"', () => {
    assert.equal(toFloat("0"), 0);
  });
  it('should return 0 for "+0"', () => {
    assert.equal(toFloat("+0"), +0);
  });
  it('should return 0 for "-0"', () => {
    assert.equal(toFloat("-0"), -0);
  });
  it('should return -1 for "-1"', () => {
    assert.equal(toFloat("-1"), -1);
  });
  it('should return 3 for "3.14159"', () => {
    assert.equal(toFloat("3.14159"), 3.14159);
  });
  it('should return -3 for "-3.14159"', () => {
    assert.equal(toFloat("-3.14159"), -3.14159);
  });
  it("should return NaN for null", () => {
    assert.isNaN(toFloat(null));
  });
  it("should return NaN for undefined", () => {
    assert.isNaN(toFloat(undefined));
  });
  it("should return 1 for 1", () => {
    assert.equal(toFloat(1), 1);
  });
  it("should return 0 for 0", () => {
    assert.equal(toFloat(0), 0);
  });
  it("should return +0 for 0", () => {
    assert.equal(toFloat(+0), +0);
  });
  it("should return -0 for 0", () => {
    assert.equal(toFloat(-0), -0);
  });
  it("should return -1 for -1", () => {
    assert.equal(toFloat(-1), -1);
  });
  it("should return 3 for 3.14159", () => {
    assert.equal(toFloat(3.14159), 3.14159);
  });
  it("should return -3 for -3.14159", () => {
    assert.equal(toFloat(-3.14159), -3.14159);
  });
  it("should return NaN for NaN", () => {
    assert.isNaN(toFloat(NaN));
  });
  it("should return Infinity for Infinity", () => {
    assert.equal(toFloat(Infinity), Infinity);
  });
  it('should return NaN for ""', () => {
    assert.isNaN(toFloat(""));
  });
});
