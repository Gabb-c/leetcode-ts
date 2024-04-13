/**
 * Calculates the product of all elements in the array except for the current element at each index.
 *
 * @param {number[]} nums - An array of numbers.
 * @returns {number[]} A new array containing the product of all elements except the current element at each index.
 *
 * @timeComplexity O(n) - Linear time complexity due to two passes through the array.
 * @spaceComplexity O(n) - Linear space complexity as it creates a new result array of the same size.
 */
export const productExceptSelf = (nums: number[]): number[] => {
  // Represents the length of the input array.
  const length = nums.length;
  // Stores the final result array containing the product of all elements except the current element at each index.
  const result: number[] = [];

  // Tracks the product of all elements to the left of the current index (initially 1).
  let leftProduct = 1;

  // First pass: calculate the product of all elements to the left of each index and store it in the result array.
  for (let i = 0; i < length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Tracks the product of all elements to the right of the current index (initially 1).
  let rightProduct = 1;

  // Second pass: calculate the product of all elements to the right of each index and multiply it with the previously calculated left product.
  // This gives the product of all elements except the current element at each index.
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  // Return the final result
  return result;
};
