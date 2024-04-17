import type { BenchmarkArrays } from "@typings/benchmark-arrays";

/**
 * Generates arrays for benchmarking algorithms.
 * @param size The size of the arrays to generate.
 * @returns An object containing various benchmark arrays.
 */
export const generateArraysForBenchmark = (size: number): BenchmarkArrays => {
  // Generate sorted array
  const sortedArray: number[] = Array.from({ length: size }, (_, i) => i);

  // Generate reverse sorted array
  const reverseArray: number[] = Array.from({ length: size }, (_, i) => size - i - 1);

  // Generate random array
  const randomArray: number[] = Array.from({ length: size }, () =>
    Math.floor(Math.random() * size),
  );

  // Generate nearly sorted array
  const nearlySortedArray: number[] = Array.from({ length: size }, (_, i) => i);

  // Randomly swap elements to make it nearly sorted
  for (let i = 0; i < size / 10; i++) {
    const index1 = Math.floor(Math.random() * size);
    const index2 = Math.floor(Math.random() * size);
    [nearlySortedArray[index1], nearlySortedArray[index2]] = [
      nearlySortedArray[index2],
      nearlySortedArray[index1],
    ];
  }

  // Return the benchmark arrays
  return {
    sorted: sortedArray,
    reverseSorted: reverseArray,
    random: randomArray,
    nearlySorted: nearlySortedArray,
  };
};
