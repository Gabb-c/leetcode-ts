import { bench, describe, expect } from "vitest";

import { productExceptSelf } from "..";
import { TEST_DATA } from "./test-data";

describe("Product of Array Except Self (benchmark)", () => {
  for (const { input, expected } of TEST_DATA) {
    bench(`should return the product of array except self for input [${input.join(",")}]`, () => {
      expect(productExceptSelf(input)).toEqual(expected);
    });
  }
});
