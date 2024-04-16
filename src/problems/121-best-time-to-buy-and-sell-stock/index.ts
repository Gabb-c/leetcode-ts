/**
 * Calculates the maximum profit that can be made by buying and selling a stock once.
 *
 * @param {number[]} prices - An array of numbers representing the stock prices on each day.
 * @returns {number} The maximum profit that can be made.
 *
 * @timeComplexity O(n) - Linear time complexity due to a single pass through the prices array.
 * @spaceComplexity O(1) - Constant space complexity as it uses a few variables.
 */
export const maxProfit = (prices: number[]): number => {
  // Tracks the minimum buying price seen so far.
  let minPrice = prices[0];

  // Stores the maximum profit achieved.
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    // Check if currentPrice is less than minPrice or if is greater than maxProfit
    minPrice = Math.min(minPrice, currentPrice);
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
  }

  // Return the maxProfit (could be 0)
  return maxProfit;
};
