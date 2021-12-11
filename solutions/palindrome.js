// Both are O(n)

/**
 * Returns true or false if a given string is a palidrome
 * @param {String} s
 * @returns {Boolean}
 */
function palidrome(s) {
  let left = Math.floor((s.length - 1) / 2);
  let right = Math.floor((s.length - 1) / 2);
  if (s.length % 2 === 0) {
    right += 1;
  }
  while (s[left] === s[right] && left >= 0 && right < s.length) {
    left -= 1;
    right += 1;
  }
  return right === s.length || left < 0;
}

// also
function palidromeV2(s) {
  let reverse = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reverse += s[i];
  }
  return reverse === s;
}
