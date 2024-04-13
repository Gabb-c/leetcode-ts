import type { InputTestData } from "@typings/input-data";

export const TEST_DATA: InputTestData<number[], number>[] = [
  // Basic cases:
  { input: [7, 1, 5, 3, 6, 4], expected: 5 }, // Sell at 6, buy at 1 (max profit)
  { input: [7, 6, 4, 3, 1], expected: 0 }, // Prices go down, no profit
  { input: [1], expected: 0 }, // Single element, no profit

  // Edge cases:
  { input: [1, 2], expected: 1 }, // Buy at 1, sell at 2 (minimum price change)
  { input: [2, 1], expected: 0 }, // Prices go down, no profit (inverted order)
  { input: [10000, 1], expected: 0 }, // Prices start high, profit close to max value

  // Test cases with large arrays:
  { input: Array(10000).fill(10000), expected: 0 }, // All prices same (no profit)
  { input: Array(10000).fill(1).concat([10001]), expected: 10000 }, // Large array with slight increase at end
  { input: [10000, 5000, 2000, 1000, ...Array(9996).fill(1)], expected: 0 }, // Large array with decreasing prices then flattens (no profit)

  // Test case with empty array:
  { input: [], expected: 0 }, // Empty array (no profit)
];
