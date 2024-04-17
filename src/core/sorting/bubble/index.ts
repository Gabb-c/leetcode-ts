/**
 * ## Bubble Sort
 *
 * Sorts an array of numbers in ascending order using the Bubble Sort algorithm
 * with an optimization to terminate early if no swaps occur.
 *
 * Time complexity: O(n^2) (potentially less with early termination)
 * Space complexity: O(1) (in-place sorting)
 *
 * @param arr - The array of numbers to be sorted.
 * @returns A new array containing the sorted numbers.
 */
export const bubbleSort = (arr: number[]): number[] => {
  // Flag to track if any swaps occurred in the inner loop
  let swapped = true;

  // Loop through each element of the array (outer loop)
  for (let outer = arr.length - 1; outer >= 0 && swapped; outer--) {
    swapped = false; // Reset flag before inner loop

    // Loop through the unsorted part of the array (inner loop)
    for (let inner = 0; inner < outer; inner++) {
      // Compare adjacent elements and swap if they are in the wrong order
      if (arr[inner] > arr[inner + 1]) {
        [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]];
        swapped = true; // Set flag if a swap occurred
      }
    }
  }
  // Return the sorted array
  return arr;
};
