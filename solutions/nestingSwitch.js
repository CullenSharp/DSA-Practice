
/**
 * Logs buzz to the console on every vowel
 * @param {string} str
 * @returns {null}
 */
function vowelBuzz(str) {
  for (let char of str) {
    switch (char) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        console.log("buzz");
        break;
      default:
        console.log(char);
    }
  }
  return null;
}

module.exports = vowelBuzz;
