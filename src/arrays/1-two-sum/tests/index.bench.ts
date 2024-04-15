import { bench, describe } from "vitest";

import { leetcodeProblem } from "..";
import { TEST_DATA } from "./test-data";

const { name, solutions } = leetcodeProblem;

describe(name, () => {
  for (const { name, implementation } of solutions) {
    bench(name, () => {
      for (const {
        input: { nums, target },
      } of TEST_DATA) {
        implementation(nums, target);
      }
    });
  }
});
