## Merge Sort Algorithm

Merge Sort is a highly efficient "divide and conquer" sorting technique known for its guaranteed good performance.

### Algorithm Breakdown

Merge Sort works by recursively dividing the input list into smaller sub-arrays, then merging them back in a sorted order:

1. **Base Case:**
   - If the sub-array has only one element, it's considered sorted (no further action needed).

2. **Divide:**
   - Recursively divide the input list into approximately half-sized sub-arrays.

3. **Conquer:**
   - Recursively sort the sub-arrays using Merge Sort.

4. **Merge:**
   - Combine the two sorted sub-arrays back into a single sorted sub-array. This involves comparing elements from each sub-array and selecting the smaller one to place in the resulting merged sub-array.

### Time Complexity

Merge Sort has a guaranteed time complexity of O(n log n) in all cases, making it significantly faster than algorithms like Bubble Sort or Insertion Sort for large datasets. This efficiency stems from the balanced nature of the divide-and-conquer approach.

### Space Complexity

Merge Sort has a space complexity of O(n) due to the creation of temporary sub-arrays during the merging process. However, this additional space usage is often considered a fair trade-off for the guaranteed good performance.

### Advantages

* **Guaranteed good performance:** Merge Sort offers a time complexity of O(n log n) in all cases, making it efficient for both random and sorted data.
* **Stable sorting:** It preserves the original order of elements with equal values.

### Disadvantages

* **Space overhead:** The creation of temporary sub-arrays during merging leads to O(n) space complexity.
* **Recursive overhead:** The recursive nature of the algorithm can introduce some overhead compared to iterative sorting methods.

### Use Cases

Merge Sort is a popular choice for sorting large datasets due to its guaranteed efficiency. It's widely used in various applications requiring fast and stable sorting, such as database management and machine learning.

### Conclusion

Merge Sort is a powerful sorting algorithm that offers a guaranteed good time complexity and stability. While it has some space overhead, its efficiency and stability make it a valuable tool for various sorting tasks in TypeScript projects.
