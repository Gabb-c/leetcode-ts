import { bench } from "vitest";
import { bubbleSort } from "../bubble";
import { insertionSort } from "../insertion";
import { TEST_DATA } from "./test-data";

describe("Sorting Algorithms", () => {
  bench("Bubble Sort", () => {
    for (const { input } of TEST_DATA) {
      bubbleSort(input);
    }
  });

  bench("Insertion Sort", () => {
    for (const { input } of TEST_DATA) {
      insertionSort(input);
    }
  });
});
