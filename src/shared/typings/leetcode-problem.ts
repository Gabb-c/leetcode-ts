/**
 * Represents a solution to a problem, containing its name and implementation.
 */
type Solution<Output> = {
  /** The name of the solution. */
  name: string;
  /** The implementation of the solution, which is a function taking any arguments and returning any value. */
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  implementation: (...args: any[]) => Output;
};

/**
 * Represents a problem on LeetCode, containing its name, code, tags, and available solutions.
 */
export type LeetcodeProblem<Output> = {
  /** The name of the problem. */
  name: string;
  /** The code identifier of the problem on LeetCode. */
  code: string;
  /** An array of tags describing the problem. */
  tags: string[];
  /** An array of available solutions for the problem. */
  solutions: Solution<Output>[];
};
