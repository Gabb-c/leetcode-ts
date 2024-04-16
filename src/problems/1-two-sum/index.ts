import type { LeetcodeProblem } from "@typings/leetcode-problem";

/**
 * Finds the indices of two numbers in an array that add up to a target sum.
 *
 * @param {number[]} nums - The array of numbers to search.
 * @param {number} target - The target sum.
 * @returns {number[]} An array containing the indices of the two numbers that add up to the target sum, or an empty array if no such pair exists.
 *
 * @timeComplexity O(n) - Linear time complexity due to the single pass through the array.
 * @spaceComplexity O(n) - Uses a Map to store seen numbers, which scales linearly with the input size.
 */
const hashMap = (nums: number[], target: number): number[] => {
  // Create a Map to store numbers and their corresponding indices.
  const numIndicesMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement needed to reach the target sum.
    const complement = target - nums[i];

    // Check if the complement exists in the Map (meaning we found a pair that sums to the target).
    if (numIndicesMap.has(complement)) {
      // If found, return an array containing the indices of the two numbers.
      return [numIndicesMap.get(complement) as number, i];
    }

    // If not found, store the current number and its index in the Map for future lookups.
    numIndicesMap.set(nums[i], i);
  }

  // If no pair is found, return an empty array.
  return [];
};

/**
 * Finds the indices of two numbers in an array that add up to a target sum using brute force.
 *
 * @param {number[]} nums - The array of numbers to search.
 * @param {number} target - The target sum.
 * @returns {number[]} An array containing the indices of the two numbers that add up to the target sum, or an empty array if no such pair exists.
 *
 * @timeComplexity O(n^2) - Quadratic time complexity due to nested loops, where n is the length of the input array.
 * @spaceComplexity O(1) - Constant space complexity as no additional data structures are used.
 */
const bruteForce = (nums: number[], target: number): number[] => {
  // Iterate over each element in the array.
  for (let i = 0; i < nums.length; i++) {
    // Iterate over each subsequent element to form pairs.
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the sum of the current pair equals the target.
      if (nums[i] + nums[j] === target) {
        // If found, return an array containing the indices of the two numbers.
        return [i, j];
      }
    }
  }

  // If no pair is found, return an empty array.
  return [];
};

export const TWO_SUM: LeetcodeProblem<number[]> = {
  name: "Two Sum",
  code: "1",
  tags: ["Array"],
  solutions: [
    { name: "HashMap", implementation: hashMap },
    { name: "Bruteforce", implementation: bruteForce },
  ],
};
