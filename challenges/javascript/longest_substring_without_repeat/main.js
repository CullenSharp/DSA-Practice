/**
 * This solution uses the shifting window approach and a Set
 * The Set datastructure ignores duplicates, so is good for trakcing unique chars
 *
 * The shifting window technique uses two pointers left and right
 * By default the "window" expands by incrementing the right pointer
 * Whenever a duplicate value is seen, the left most value is removed
 * The left pointer is then incremented, "shrinking" and "shifting" the window
 *
 * Using a set in combination with the shifting window technique
 * We achieve a runtime of O(n) where n is the length of a given string
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charSet = new Set();
  let output = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    }
    charSet.add(s[right]);
    output = Math.max(output, right - left + 1);
  }
  return output;
};
