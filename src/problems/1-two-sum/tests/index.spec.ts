import { TWO_SUM } from "..";
import { TEST_DATA } from "./test-data";

describe(TWO_SUM.name, () => {
  // Loop through different implementations provided in solutions
  describe.each(TWO_SUM.solutions)("$name", ({ implementation }) => {
    // Test for each test case
    it.each(TEST_DATA)(
      "should find the indices of two numbers that add up to $input.target",
      ({ expected, input: { nums, target } }) => {
        // Validate test data - ensure nums and target are defined
        expect(nums).toBeDefined();
        expect(target).toBeDefined();

        // Run the test
        const result = implementation(nums, target);

        // Validate the output - ensure the result matches the expected indices
        expect(result).toBeDefined();
        expect(result).toEqual(expected);
      },
    );
  });
});
