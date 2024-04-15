import { bench, describe } from "vitest";

import type { InputTestData } from "shared/typings/input-data";
import type { Matrix } from "shared/typings/matrix";
import { spiralOrder } from "..";

const TEST_DATA: InputTestData<Matrix<number>, number[]> = {
  input: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
};

describe("Spiral Matrix (bench)", () => {
  const { input } = TEST_DATA;
  bench("should return the elements of the matrix in spiral order", () => {
    spiralOrder(input);
  });
});
