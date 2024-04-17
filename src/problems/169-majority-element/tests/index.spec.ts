import { MAJORITY_ELEMENT } from "..";
import { TEST_DATA } from "./test-data";

describe(MAJORITY_ELEMENT.name, () => {
  // Loop through different implementations provided in solutions
  describe.each(MAJORITY_ELEMENT.solutions)("$name", ({ implementation }) => {
    // Test for each test case
    it.each(TEST_DATA)(
      "should find the majority element in the array ($expected)",
      ({ expected, input }) => {
        // Validate test data
        expect(input).toBeDefined();
        expect(expected).toBeDefined();

        // Run the test
        const result = implementation(input);

        // Validate the output - ensure the result matches the expected indices
        expect(result).toBeDefined();
        expect(result).toEqual(expected);
      },
    );
  });
});
