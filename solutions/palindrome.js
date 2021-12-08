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

let testCases = ["a", "bb", "abc", "racecar", "blue", "baab", "caac"];
for (let testCase of testCases) {
  console.log("\n", palidrome(testCase));
  console.log(testCase);
}
