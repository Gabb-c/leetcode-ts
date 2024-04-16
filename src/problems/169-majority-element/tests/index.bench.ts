import { bench, describe } from "vitest";

import { MAJORITY_ELEMENT } from "..";
import { TEST_DATA } from "./test-data";

const { name, solutions } = MAJORITY_ELEMENT;

describe(name, () => {
  for (const { name, implementation } of solutions) {
    bench(name, () => {
      for (const { input } of TEST_DATA) {
        implementation(input);
      }
    });
  }
});
