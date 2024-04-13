import { bench, describe, expect } from "vitest";

import { twoSum } from "..";
import { TEST_DATA } from "./test-data";

describe("Two Sum (benchmark)", () => {
  for (const {
    input: { nums, target },
    expected,
  } of TEST_DATA) {
    bench(`should find the indices of two numbers that add up to ${target}`, () => {
      expect(twoSum(nums, target)).toEqual(expected);
    });
  }
});
