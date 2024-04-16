import type { InputTestData } from "@typings/input-data";

export const TEST_DATA: InputTestData<number[], number>[] = [
  { input: [3, 2, 3], expected: 3 },
  { input: [2, 2, 1, 1, 1, 2, 2], expected: 2 },
  { input: [1, 2, 2, 3, 2], expected: 2 },
  { input: [5, 5, 2, 2, 5, 5, 5], expected: 5 },
  { input: [1, 1, 2, 2, 3, 3, 3, 3, 3], expected: 3 },
  { input: [6, 5, 5, 5, 5, 5, 5, 5, 5, 5], expected: 5 },
  { input: [9, 9, 9, 9, 9, 9, 9, 9, 9, 8], expected: 9 },
  { input: [-1, -2, -2, -2, -2, -2, -2, -2, -2, -2], expected: -2 },
  {
    input: [
      1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 999999999, 1, 2, 3,
    ],
    expected: 1000000000,
  },
  {
    input: [
      -1000000000, -1000000000, -1000000000, -1000000000, -1000000000, -1000000000, -999999999, 1,
      2, 3,
    ],
    expected: -1000000000,
  },
];
