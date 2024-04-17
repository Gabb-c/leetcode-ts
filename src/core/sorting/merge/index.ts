/**
 * Sorts an array of elements in ascending order using the Merge Sort algorithm.
 *
 * Merge Sort is a divide-and-conquer sorting algorithm. It works by:
 *
 * 1. Recursively dividing the unsorted array into halves until each sub-array
 *    contains a single element (base case).
 * 2. Merging the sorted sub-arrays back together in a way that preserves
 *    the sorted order.
 *
 * @param arr - The array to be sorted.
 * @returns The sorted array.
 *
 * Time complexity: O(n log n) (average and worst case)
 * Space complexity: O(n) (due to creating new sub-arrays)
 */
export function mergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr; // Base case: single element array is already sorted
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
  const right = mergeSort(arr.slice(mid)); // Recursively sort the right half

  return merge(left, right); // Merge the sorted left and right sub-arrays
}

/**
 * Merges two sorted arrays into a single sorted array.
 *
 * This function compares elements from the left and right arrays and inserts
 * the smaller element into the resulting merged array. It continues until all
 * elements from one of the sub-arrays are included, then adds the remaining
 * elements from the other sub-array.
 *
 * @param left - The first sorted sub-array.
 * @param right - The second sorted sub-array.
 * @returns The merged sorted array.
 */
function merge<T>(left: T[], right: T[]): T[] {
  const merged: T[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Concatenate remaining elements (if any)
  return merged.concat(left.slice(i)).concat(right.slice(j));
}
