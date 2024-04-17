import { bubbleSort } from "../bubble";
import { insertionSort } from "../insertion";
import { TEST_DATA } from "./test-data";

describe("Sorting Algorithms", () => {
  describe("Bubble Sort", () => {
    it.each(TEST_DATA)("should sort the array correctly", ({ input, expected }) => {
      // Validate the test data
      expect(input).toBeDefined();
      expect(expected).toBeDefined();

      // Run the function
      const result = bubbleSort(input);

      // Validate the result
      expect(result).toBeDefined();
      expect(result).toEqual(expected);
    });
  });

  describe("Insertion Sort", () => {
    it.each(TEST_DATA)("should sort the array correctly", ({ input, expected }) => {
      // Validate the test data
      expect(input).toBeDefined();
      expect(expected).toBeDefined();

      // Run the function
      const result = insertionSort(input);

      // Validate the result
      expect(result).toBeDefined();
      expect(result).toEqual(expected);
    });
  });
});
