import { describe, expect, it } from "vitest";

import { maxProfit } from "..";
import { TEST_DATA } from "./test-data";

describe("Best Time to Buy and Sell Stock", () => {
  for (const { input, expected } of TEST_DATA) {
    it("should find the maximum profit", () => {
      // Validate inputs
      expect(input).toBeDefined();
      expect(expected).toBeDefined();
      // Validate output
      expect(maxProfit(input)).toEqual(expected);
    });
  }
});
