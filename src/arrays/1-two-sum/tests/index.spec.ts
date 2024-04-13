import { describe, expect, it } from "vitest";

import { twoSum } from "..";
import { TEST_DATA } from "./test-data";

describe("Two Sum", () => {
  for (const {
    input: { nums, target },
    expected,
  } of TEST_DATA) {
    it(`should find the indices of two numbers that add up to ${target}`, () => {
      // Validate inputs
      expect(nums).toBeDefined();
      expect(target).toBeDefined();
      // Validate output
      expect(twoSum(nums, target)).toEqual(expected);
    });
  }
});
