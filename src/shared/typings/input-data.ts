/**
 * Represents a single test data record for a solution.
 *
 * @template I The type of the input data provided to the solution.
 * @template E The type of the expected output from the solution.
 */
export type InputTestData<I, E> = {
  /** The input data to be passed to the solution under test.*/
  input: I;
  /** The expected output value from the solution for the given input. */
  expected: E;
};
