// Beware of global state; if it mutates, it's a problem.
// Try to write pure functions
// Both 0(n) memory and time

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let closers = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "{":
      case "[":
      case "(":
        stack.push(s[i]);
        break;
      case "}":
      case "]":
      case ")":
        if (closers[stack.pop()] !== s[i]) {
          return false;
        }
        break;
      default:
        break;
    }
  }
  return stack.length === 0;
};

// Or (doesn't work with non-parens)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (const char of s) {
    if (char in pairs) {
      stack.push(char);
    } else {
      let bracket = stack.pop();
      if (char !== pairs[bracket]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
