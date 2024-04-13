import { bench, describe, expect } from "vitest";

import { maxProfit } from "..";
import { TEST_DATA } from "./test-data";

describe("Best Time to Buy and Sell Stock (benchmark)", () => {
  for (const { input, expected } of TEST_DATA) {
    bench("should find the maximum profit", () => {
      expect(maxProfit(input)).toEqual(expected);
    });
  }
});
