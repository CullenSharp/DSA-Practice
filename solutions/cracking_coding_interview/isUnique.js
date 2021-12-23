/**
 * Determines if all chars in a given string are unique
 * @param {string} str
 * @returns {boolean}
 */
function isUnique(str) {
  let idx = 0;
  let charMap = new Map();

  while (idx < str.length) {
    if (charMap.has(str[idx])) {
      return false;
    } else {
      charMap.set(str[idx], idx);
    }
    idx++;
  }
  return true;
}

export default isUnique;
