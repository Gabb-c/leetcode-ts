import type { InputTestData } from "shared/typings/input-data";

/** Test data for the solution */
export const TEST_DATA: InputTestData<number[], number[]>[] = [
  { input: [1, 2, 3, 4], expected: [24, 12, 8, 6] }, // Test case with positive numbers
  { input: [5, 6, 7], expected: [42, 35, 30] }, // Test case with positive numbers
  { input: [-5, -6, -7], expected: [42, 35, 30] }, // Test case with negative numbers (absolute values are equal to the previous test case)
  { input: [0, 0, 0], expected: [0, 0, 0] }, // Test case with all zeroes
  { input: [1, 2, 0, 4], expected: [0, 0, 8, 0] }, // Test case with a zero element
  { input: [2], expected: [1] }, // Test case with a single element
  { input: [-2], expected: [1] }, // Test case with a single negative element
  { input: [1, -2], expected: [-2, 1] }, // Test case with two elements
  { input: [-1, 1], expected: [1, -1] }, // Test case with two elements (one positive, one negative)
  { input: [-1, -2, -3], expected: [6, 3, 2] }, // Test case with negative numbers
];
