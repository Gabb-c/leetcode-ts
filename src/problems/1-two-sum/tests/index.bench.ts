import { bench } from "vitest";

import { TWO_SUM } from "..";
import { TEST_DATA } from "./test-data";

const { name, solutions } = TWO_SUM;

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
