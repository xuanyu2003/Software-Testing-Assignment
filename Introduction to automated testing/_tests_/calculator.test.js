// __tests__/calculator.test.js
import { divide } from "../src/calculator.js";

describe("divide function", () => {
  // ✅ Positive test
  test("divides two valid numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // ❌ Negative tests

  test("throws TypeError if first argument is not a number", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
    expect(() => divide("10", 2)).toThrow("Both arguments must be numbers");
  });

  test("throws TypeError if second argument is not a number", () => {
    expect(() => divide(10, "2")).toThrow(TypeError);
    expect(() => divide(10, "2")).toThrow("Both arguments must be numbers");
  });

  test("throws TypeError if any argument is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
    expect(() => divide(2, NaN)).toThrow("Arguments cannot be NaN");
  });

  test("throws RangeError when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});
