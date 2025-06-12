import { expect, test } from "vitest";
import { calculerAireRectangle } from "./lib.js";

test('calculerAireRectangle function', () => {
  expect(calculerAireRectangle(10, 4)).toBe(40);
  expect(calculerAireRectangle(0, 4)).toBe(0);
  expect(calculerAireRectangle(-12, 4)).toBe(-48);
  expect(calculerAireRectangle(Infinity, 4)).toBe(Infinity);
  expect(calculerAireRectangle("ABC", -4)).toBe(NaN);
});
