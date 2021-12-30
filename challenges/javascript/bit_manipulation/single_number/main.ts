/**
 * XOR (ex-or) is commutative, which means that output is consistent regardless or order
 * And given the following truth table:
 * A | B | Out
 * 0 | 0 | 0
 * 1 | 0 | 1
 * 0 | 1 | 1
 * 1 | 1 | 0
 * 
 * [4,1,1] -> 4^1^1 -> 0^4 = 4
 */

const singleNumber = function (nums: Array<number>) {
  let res = 0;
  for (const num of nums) {
    res ^= num;
  }
  return res;
}
