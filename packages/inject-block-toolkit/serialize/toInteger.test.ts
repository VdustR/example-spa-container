import { assert, describe, it } from "vitest";
import toInteger from "./toInteger";

describe("toInteger", () => {
  it('should return NaN for "true"', () => {
    assert.isNaN(toInteger("true"));
  });
  it('should return NaN for "false"', () => {
    assert.isNaN(toInteger("false"));
  });
  it('should return 1 for "1"', () => {
    assert.equal(toInteger("1"), 1);
  });
  it('should return 0 for "0"', () => {
    assert.equal(toInteger("0"), 0);
  });
  it('should return 0 for "+0"', () => {
    assert.equal(toInteger("+0"), +0);
  });
  it('should return 0 for "-0"', () => {
    assert.equal(toInteger("-0"), -0);
  });
  it('should return -1 for "-1"', () => {
    assert.equal(toInteger("-1"), -1);
  });
  it('should return 3 for "3.14159"', () => {
    assert.equal(toInteger("3.14159"), 3);
  });
  it('should return -3 for "-3.14159"', () => {
    assert.equal(toInteger("-3.14159"), -3);
  });
  it("should return NaN for null", () => {
    assert.isNaN(toInteger(null));
  });
  it("should return NaN for undefined", () => {
    assert.isNaN(toInteger(undefined));
  });
  it("should return 1 for 1", () => {
    assert.equal(toInteger(1), 1);
  });
  it("should return 0 for 0", () => {
    assert.equal(toInteger(0), 0);
  });
  it("should return +0 for 0", () => {
    assert.equal(toInteger(+0), +0);
  });
  it("should return -0 for 0", () => {
    assert.equal(toInteger(-0), -0);
  });
  it("should return -1 for -1", () => {
    assert.equal(toInteger(-1), -1);
  });
  it("should return 3 for 3.14159", () => {
    assert.equal(toInteger(3.14159), 3);
  });
  it("should return -3 for -3.14159", () => {
    assert.equal(toInteger(-3.14159), -3);
  });
  it("should return NaN for NaN", () => {
    assert.isNaN(toInteger(NaN));
  });
  it("should return Infinity for Infinity", () => {
    assert.equal(toInteger(Infinity), Infinity);
  });
  it('should return NaN for ""', () => {
    assert.isNaN(toInteger(""));
  });
});
