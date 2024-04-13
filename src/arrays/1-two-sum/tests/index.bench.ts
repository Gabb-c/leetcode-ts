import { bench, describe } from "vitest";

import type { InputTestData } from "@typings/input-data";
import { twoSum } from "..";

const TEST_DATA: InputTestData<{ nums: number[]; target: number }, number[]> = {
  input: { nums: [2, 7, 11, 15], target: 9 },
  expected: [0, 1],
};

describe("Two Sum (benchmark)", () => {
  const {
    input: { nums, target },
  } = TEST_DATA;

  bench(`should find the indices of two numbers that add up to ${target}`, () => {
    twoSum(nums, target);
  });
});
