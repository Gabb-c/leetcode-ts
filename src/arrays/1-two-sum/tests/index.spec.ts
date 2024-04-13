import { describe, expect, it } from "vitest";

import { twoSum } from "..";
import { TEST_DATA } from "./test-data";

describe("Two Sum", () => {
  for (const { input, expected } of TEST_DATA) {
    it(`should find the indices of two numbers that add up to ${input.target}`, () => {
      expect(twoSum(input.nums.slice(), input.target)).toEqual(expected);
    });
  }
});
