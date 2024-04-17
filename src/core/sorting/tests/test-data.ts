import type { InputTestData } from "@typings/input-data";

export const TEST_DATA: InputTestData<number[], number[]>[] = [
  // Test cases with different array sizes
  { input: [1], expected: [1] },
  { input: [2, 1], expected: [1, 2] },
  { input: [4, 3, 2, 1, 0], expected: [0, 1, 2, 3, 4] },
  { input: [10, 5, 15, 2, 8], expected: [2, 5, 8, 10, 15] },
  { input: [100, 50, 200, 1, 75], expected: [1, 50, 75, 100, 200] },

  // Test cases with duplicate elements
  { input: [3, 1, 2, 3, 1], expected: [1, 1, 2, 3, 3] },
  { input: [5, 5, 5], expected: [5, 5, 5] },

  // Test cases with negative numbers
  { input: [-2, 5, 0, -1], expected: [-2, -1, 0, 5] },
  { input: [-5, -1, -3, -4], expected: [-5, -4, -3, -1] },

  // Test cases with empty array
  { input: [], expected: [] },
];
