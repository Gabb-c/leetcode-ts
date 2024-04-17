import { spiralOrder } from "..";
import { TEST_DATA } from "./test-data";

describe("Spiral Matrix", () => {
  for (const { input, expected } of TEST_DATA) {
    it("should return the elements of the matrix in spiral order", () => {
      // Validate inputs
      expect(input).toBeDefined();
      expect(expected).toBeDefined();

      // Validate output
      expect(spiralOrder(input)).toEqual(expected);
    });
  }
});
