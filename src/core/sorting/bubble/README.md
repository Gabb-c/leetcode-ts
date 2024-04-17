## Bubble Sort

Bubble Sort works by repeatedly stepping through the list to be sorted. 
In each pass, it compares adjacent elements and swaps them if they are in the wrong order. 
The larger element "bubbles" up towards the end of the list with each pass. 

### Algorithm Breakdown

Here's a detailed breakdown:

1. **Initialization:**  
    - Set a variable `swapped` to `false` (indicates if a swap occurred during the pass).
    - Iterate through the list using a loop for `n-1` times (since the last element is already in its final position after n-1 passes).

2. **Inner Loop:**
   - In each iteration of the inner loop, compare the current element (at index `i`) with the next element (at index `i+1`).
   - If the current element is greater than the next element, swap their positions and set `swapped` to `true`.

3. **Swapping:**
   - To swap elements, use a temporary variable to hold the current element.
   - Assign the next element's value to the current element's position.
   - Assign the temporary variable (holding the original current element's value) to the next element's position.

4. **Continue Until No Swaps:**
   - After the inner loop completes, check the value of `swapped`.
   - If `swapped` is `false`, it means no swaps occurred during the pass, indicating the list is sorted. Terminate the outer loop.
   - If `swapped` is `true`, repeat the outer loop for another pass, as elements might still be out of order.

### Time Complexity

Bubble Sort has a time complexity of O(n^2) in the worst and average cases. This means the number of comparisons (and potentially swaps) grows quadratically with the size of the input list (n). For larger datasets, this can be quite inefficient.

### Space Complexity

Bubble Sort has a space complexity of O(1). It only uses a constant amount of additional space (e.g., temporary variables for swapping) regardless of the input list size.

### Advantages

* **Simple to understand and implement:**  Due to its straightforward logic, Bubble Sort is a great starting point for learning sorting algorithms.
* **Easy to visualize:** The concept of elements bubbling up is easy to grasp and can be visualized for better understanding.

### Disadvantages

* **Inefficient for large datasets:** The O(n^2) time complexity makes Bubble Sort impractical for sorting massive amounts of data.

### Use Cases

* Bubble Sort is primarily used for educational purposes due to its simplicity.
* It might be suitable for sorting very small datasets where efficiency is not a critical concern.

### Conclusion

Bubble Sort provides a valuable introduction to sorting algorithms. While not the most efficient option for real-world applications, understanding its logic is beneficial for grasping more complex sorting techniques.
