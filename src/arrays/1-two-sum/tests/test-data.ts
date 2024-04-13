import type { InputTestData } from "@typings/input-data";

export const TEST_DATA: InputTestData<{ nums: number[]; target: number }, number[]>[] = [
  // Basic cases within constraints:
  { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
  { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
  { input: { nums: [5, 5], target: 10 }, expected: [0, 1] },

  // Test cases at array length limits:
  { input: { nums: Array(10000).fill(1), target: 2 }, expected: [0, 1] },

  // Test cases at element value limits:
  { input: { nums: [-1000000000, 0, 1000000000], target: 0 }, expected: [0, 2] },
  { input: { nums: [1000000000, 999999999], target: 1999999999 }, expected: [0, 1] },

  // Test cases with valid solutions but near value limits:
  { input: { nums: [-999999999, 1], target: -999999998 }, expected: [0, 1] },
  { input: { nums: [999999998, 1], target: 999999999 }, expected: [0, 1] },

  // Test case with no solution
  { input: { nums: [2], target: 4 }, expected: [] },
  { input: { nums: [2, 3], target: -5 }, expected: [] },
];
