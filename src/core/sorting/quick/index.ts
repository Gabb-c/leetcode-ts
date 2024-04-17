/**
 * Sorts an array of elements in ascending order using the Quick Sort algorithm.
 *
 * Quick Sort is a divide-and-conquer sorting algorithm. It selects a pivot element
 * from the array and partitions the other elements into two sub-arrays:
 *  - Elements less than the pivot
 *  - Elements greater than or equal to the pivot
 *
 * It then recursively sorts the sub-arrays and combines the sorted sub-arrays
 * with the pivot in the middle to create the final sorted array.
 *
 * @param arr - The array to be sorted.
 * @param left - The starting index of the sub-array (inclusive).
 * @param right - The ending index of the sub-array (exclusive).
 * @returns The sorted array.
 *
 * Time complexity: O(n log n) (average), O(n^2) (worst case)
 * Space complexity: O(log n) (average), O(n) (worst case)
 */
export function quickSort(arr: number[], left = 0, right: number = arr.length - 1): number[] {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);

    // Recursively sort the left and right sub-arrays
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

/**
 * Partitions the array around a pivot element.
 *
 * This function selects the last element as the pivot and rearranges the array
 * such that all elements less than the pivot are placed before it, and all elements
 * greater than or equal to the pivot are placed after it.
 *
 * @param arr - The array to be partitioned.
 * @param left - The starting index of the sub-array.
 * @param right - The ending index of the sub-array.
 * @returns The index of the pivot element after partitioning.
 */
function partition(arr: number[], left: number, right: number): number {
  const pivot = arr[right];
  let i = left - 1; // Index for elements less than the pivot

  // Swap elements to partition the array
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Swap the pivot element with the element at index i + 1
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

  return i + 1; // Return the index of the pivot element after partitioning
}
