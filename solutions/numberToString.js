/**
 * Converts a given number to a given base
 * @param {number} n
 * @param {2|8|10} base
 */
function numberToString(n, base = 10) {
  let result = "";
  let sign = "";

  if (n < 0) {
    sign = "-";
    n = -n;
  }

  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);
  } while (n > 0);

  switch (base) {
    case 8:
      result += "₈";
      break;
    case 10:
      result += "₁₀";
      break;
    default:
      break;
  }

  return sign + result;
}

module.exports = numberToString;
