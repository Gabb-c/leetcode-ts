import type { InputTestData } from "@typings/input-data"; // Assuming you have a types file
import type { Matrix } from "@typings/matrix";

export const TEST_DATA: InputTestData<Matrix<number>, number[]>[] = [
  {
    // Square matrix with increasing numbers in each row
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
  },
  {
    // Rectangular matrix with increasing numbers in each row
    input: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  },
  {
    // Single-element matrix
    input: [[1]],
    expected: [1],
  },
  {
    // Single-row matrix
    input: [[1, 2, 3]],
    expected: [1, 2, 3],
  },
  {
    // Single-column matrix
    input: [[1], [2], [3]],
    expected: [1, 2, 3],
  },
  {
    // Square matrix with decreasing numbers in each row
    input: [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ],
    expected: [9, 8, 7, 4, 1, 2, 3, 6, 5],
  },
  {
    // Rectangular matrix with decreasing numbers in each row
    input: [
      [12, 11, 10, 9],
      [8, 7, 6, 5],
      [4, 3, 2, 1],
    ],
    expected: [12, 11, 10, 9, 5, 1, 2, 3, 4, 8, 7, 6],
  },
  {
    // Matrix with negative numbers
    input: [
      [-1, -2, -3],
      [-4, -5, -6],
      [-7, -8, -9],
    ],
    expected: [-1, -2, -3, -6, -9, -8, -7, -4, -5],
  },
  {
    // Matrix with positive and negative numbers
    input: [
      [1, -2, 3],
      [-4, 5, -6],
      [7, -8, 9],
    ],
    expected: [1, -2, 3, -6, 9, -8, 7, -4, 5],
  },
  {
    // Matrix with zeros
    input: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    expected: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
];
