/**
 * Represents a matrix of elements of type T.
 * @template T The type of elements in the matrix.
 */
export type Matrix<T> = T[][];

/**
 * Represents an immutable matrix of elements of type T.
 * @template T The type of elements in the matrix.
 */
export type ReadonlyMatrix<T> = ReadonlyArray<ReadonlyArray<T>>;
