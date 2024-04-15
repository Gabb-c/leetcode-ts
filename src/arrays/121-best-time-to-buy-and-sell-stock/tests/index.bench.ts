import { bench, describe } from "vitest";

import type { InputTestData } from "shared/typings/input-data";
import { maxProfit } from "..";

const TEST_DATA: InputTestData<number[], number> = { input: [7, 1, 5, 3, 6, 4], expected: 5 };

describe("Best Time to Buy and Sell Stock (benchmark)", () => {
  const { input } = TEST_DATA;
  bench("should find the maximum profit", () => {
    maxProfit(input);
  });
});
