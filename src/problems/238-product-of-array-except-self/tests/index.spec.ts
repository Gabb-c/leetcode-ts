import { productExceptSelf } from "..";
import { TEST_DATA } from "./test-data";

describe("Product of Array Except Self", () => {
  for (const { input, expected } of TEST_DATA) {
    it(`should return the product of array except self for input [${input.join(",")}]`, () => {
      // Validate inputs
      expect(input).toBeDefined();
      expect(expect).toBeDefined();

      // Validate output
      expect(productExceptSelf(input)).toEqual(expected);
    });
  }
});
