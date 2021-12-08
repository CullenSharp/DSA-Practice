/**
 * @param {number} l
 * @param {number} r
 * @param {string} s
 * @return {string} resultant substring
 */
function palindrome(l, r, s) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    // Shift pointers
    l -= 1;
    r += 1;
  }
  return s.slice(l + 1, r);
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s;
  }
  let resStr = "";
  let resLen = -Infinity;

  for (let i = 0; i < s.length; i++) {
    let odd = palindrome(i, i + 1, s);
    let even = palindrome(i, i, s);

    if (odd.length > resLen) {
      resStr = odd;
      resLen = odd.length;
    }
    if (even.length > resLen) {
      resStr = even;
      resLen = even.length;
    }
  }
  return resStr;
};
