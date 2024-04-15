import type { LeetcodeProblem } from "@typings/leetcode-problem";

/**
 * Finds the majority element in an array using the Boyer-Moore Voting Algorithm.
 *
 * The majority element is the element that appears more than half the times in the array.
 * This algorithm has a time complexity of O(n) and a space complexity of O(1).
 *
 * @param nums An array of numbers.
 * @returns The majority element in the array.
 */
const boyerMoore = (nums: number[]): number => {
  // Initialize a counter and a candidate variable
  let count = 0;
  let candidate: number | null = null;

  // Iterate through the array
  for (const num of nums) {
    if (count === 0) {
      // Set the candidate as the first element if count is 0
      candidate = num;
    }

    // Increment count if the current element is the candidate, decrement otherwise
    count += num === candidate ? 1 : -1;
  }

  // Return the candidate if it exists (assuming a majority element always exists)
  return candidate as number;
};

/**
 * Finds the majority element in an array using a hash map.
 *
 * The majority element is the element that appears more than half the times in the array.
 * This solution has a time complexity of O(n) and a space complexity of O(n) due to the hash map usage.
 *
 * @param nums An array of numbers.
 * @returns The majority element in the array, or undefined if no majority exists.
 */
const hashMap = (nums: number[]): number | undefined => {
  // Create a new map to store number counts
  const numMap = new Map<number, number>();

  // Iterate through the array to count occurrences of each number
  for (const num of nums) {
    // If the number already exists in the map, increment its count, otherwise set count to 1
    numMap.has(num) ? numMap.set(num, (numMap.get(num) as number) + 1) : numMap.set(num, 1);

    // If the count of the current number exceeds half the length of the array, it's the majority element
    if ((numMap.get(num) as number) > nums.length / 2) return num;
  }

  // No majority element found, return undefined
  return undefined;
};

export const MAJORITY_ELEMENT: LeetcodeProblem<number | undefined> = {
  name: "169. Majority Element",
  code: "1",
  tags: ["Array"],
  solutions: [
    { name: "HashMap", implementation: hashMap },
    { name: "Boyer Moore", implementation: boyerMoore },
  ],
};
