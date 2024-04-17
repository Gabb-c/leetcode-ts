import { bench } from "vitest";

import { bubbleSort } from "../bubble";
import { insertionSort } from "../insertion";
import { mergeSort } from "../merge";
import { quickSort } from "../quick";
import { BENCHMARK_TEST_DATA } from "./test-data";

const { nearlySorted, random, reverseSorted, sorted } = BENCHMARK_TEST_DATA;

describe("Nearly Sorted", () => {
  bench("Bubble", () => {
    bubbleSort([...nearlySorted]);
  });

  bench("Insertion", () => {
    insertionSort([...nearlySorted]);
  });

  bench("Quick", () => {
    quickSort([...nearlySorted]);
  });

  bench("Merge", () => {
    mergeSort([...nearlySorted]);
  });
});
// // Test Insertion Sort
describe("Sorted", () => {
  bench("Bubble", () => {
    bubbleSort([...sorted]);
  });

  bench("Insertion", () => {
    insertionSort([...sorted]);
  });

  bench("Quick", () => {
    quickSort([...sorted]);
  });

  bench("Merge", () => {
    mergeSort([...sorted]);
  });
});

describe("Reverse", () => {
  bench("Bubble", () => {
    bubbleSort([...reverseSorted]);
  });

  bench("Insertion", () => {
    insertionSort([...reverseSorted]);
  });

  bench("Quick", () => {
    quickSort([...reverseSorted]);
  });

  bench("Merge", () => {
    mergeSort([...reverseSorted]);
  });
});

describe("Random", () => {
  bench("Bubble", () => {
    bubbleSort([...random]);
  });

  bench("Insertion", () => {
    insertionSort([...random]);
  });

  bench("Quick", () => {
    quickSort([...random]);
  });

  bench("Merge", () => {
    mergeSort([...random]);
  });
});
