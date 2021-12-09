// Naive/brute force O(n^3) O(1)

/**
 * Reverses a given string
 * @param {String} str
 * @returns {String}
 */
function reverse(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) res += str[i];
  return res;
}

/**
 * Returns the length of the longest palindromic substring
 * @param {String}
 * @returns {String}
 */
function longestPalindromicSubstring(str) {
  let res = "";

  for (let left = 0; left < str.length; left++) {
    for (let right = left + 1; right <= str.length; right++) {
      let substring = str.slice(left, right);

      if (substring === reverse(substring)) {
        res = substring.length > res.length ? substring : res;
      }
    }
  }
  return res;
}
