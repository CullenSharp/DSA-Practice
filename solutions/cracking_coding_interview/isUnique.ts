/**
 * Determines if all chars in a given string are unique
 * @param {string} str
 * @returns {boolean}
 */
function isUnique(str: string): boolean {
  let idx: number = 0;
  let charMap = new Map<string, number>();

  while(idx < str.length) {
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
