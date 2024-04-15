import { describe, expect, it } from "vitest";

import { leetcodeProblem } from "..";
import { TEST_DATA } from "./test-data";

describe(leetcodeProblem.name, () => {
  for (const { name, implementation } of leetcodeProblem.solutions) {
    describe(name, () => {
      for (const {
        input: { nums, target },
        expected,
      } of TEST_DATA) {
        it("should find the indices of two numbers that add up to target", () => {
          // Validate inputs
          expect(nums).toBeDefined();
          expect(target).toBeDefined();
          // Validate output
          expect(implementation(nums, target)).toEqual(expected);
        });
      }
    });
  }
});
