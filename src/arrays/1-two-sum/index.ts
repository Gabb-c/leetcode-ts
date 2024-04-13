/**
 * Finds the indices of two numbers in an array that add up to a target sum.
 * (This problem can be found on LeetCode: https://leetcode.com/problems/two-sum/)
 *
 * @param {number[]} nums - The array of numbers to search.
 * @param {number} target - The target sum.
 * @returns {number[]} An array containing the indices of the two numbers that add up to the target sum, or an empty array if no such pair exists.
 *
 * @timeComplexity O(n) - Linear time complexity due to the single pass through the array.
 * @spaceComplexity O(n) - Uses a Map to store seen numbers, which scales linearly with the input size.
 */
export const twoSum = (nums: number[], target: number): number[] => {
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
