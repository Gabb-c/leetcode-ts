import type { Matrix } from "@typings/matrix";

/**
 * Returns the elements of the input matrix in spiral order.
 *
 * @param {Matrix<number>} matrix - The input matrix.
 * @returns {number[]} The elements of the matrix in spiral order.
 *
 * @timeComplexity O(m * n) - Linear time complexity, where m is the number of rows and n is the number of columns in the matrix.
 * @spaceComplexity O(1) - Constant space complexity, as the result array is not included in the space analysis.
 *
 * @description
 * This function traverses the input matrix in a spiral order by repeatedly moving through its boundary elements.
 * It maintains four boundary variables representing the outermost row and column indices of the matrix.
 * It iteratively moves from left to right, top to bottom, right to left, and bottom to top, updating the boundaries
 * after each traversal step until all elements have been visited.
 */
export const spiralOrder = (matrix: Matrix<number>): number[] => {
  // Initialize the result array
  const res: number[] = [];

  // Initialize boundary variables
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;

  // Traverse the matrix in a spiral order
  while (left < right && top < bottom) {
    // Traverse top row
    for (let i = left; i < right; i++) res.push(matrix[top][i]);
    top++;

    // Traverse right column
    for (let i = top; i < bottom; i++) res.push(matrix[i][right - 1]);
    right--;

    // Check if there are still elements to traverse
    if (!(left < right && top < bottom)) break;

    // Traverse bottom row
    for (let i = right - 1; i > left - 1; i--) res.push(matrix[bottom - 1][i]);
    bottom--;

    // Traverse left column
    for (let i = bottom - 1; i > top - 1; i--) res.push(matrix[i][left]);
    left++;
  }

  return res;
};
