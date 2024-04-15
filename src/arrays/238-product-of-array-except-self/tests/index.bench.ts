import { bench, describe } from "vitest";

import type { InputTestData } from "shared/typings/input-data";
import { productExceptSelf } from "..";

const TEST_DATA: InputTestData<number[], number[]> = {
  input: [1, 2, 3, 4],
  expected: [24, 12, 8, 6],
};

describe("Product of Array Except Self (benchmark)", () => {
  const { input } = TEST_DATA;
  bench("should return the product of array except self", () => {
    productExceptSelf(input);
  });
});
