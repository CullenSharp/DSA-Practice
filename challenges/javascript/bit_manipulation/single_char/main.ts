// The solution to Single Number can be applied to this challenge

const singleChar = function (chars: Array<string>): string {
  let res = 0;
  for (const char of chars) {
    res ^= char.charCodeAt(0);
  }
  return String.fromCharCode(res);
}
