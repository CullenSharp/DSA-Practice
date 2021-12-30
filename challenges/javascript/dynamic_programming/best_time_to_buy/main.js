/**
 * Find the local min and max, sliding window
 * Two pointers left (buy) and right (sell)
 * When price is lower than what you buy in at
 * Shift left boundary to the right most boundary
 *
 * O(n) & O(1)
 *
 * When you want to pick the larger of two numbers, just you Math.max
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = 0;
  let maxProfit = 0;

  for (let sell = 1; sell < prices.length; sell++) {
    if (prices[buy] > prices[sell]) {
      buy = sell;
    } else {
      maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
    }
  }
  return maxProfit;
};
