/**
 * ## Insertion Sort
 *
 * Sorts an array of elements in ascending order using the Insertion Sort algorithm.
 *
 * @param arr - The array to be sorted.
 * @returns A new array containing the sorted elements.
 *
 * Time complexity: O(n^2) (average and worst case)
 * Space complexity: O(1) (in-place sorting)
 */
export const insertionSort = (arr: number[]): number[] => {
  // Loop through each element of the array (except the first element)
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    // Shift elements of the sorted sub-array to make space for the current element
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element at its correct position
    arr[j + 1] = current;
  }

  // Return the sorted array
  return arr;
};
