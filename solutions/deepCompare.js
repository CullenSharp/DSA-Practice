/**
 * Takes in two objects and returns true if they have deep equality
 * @param {object, array} a
 * @param {object, array} b
 * @returns boolean
 */
function deepCompare(a, b) {
  let res = false;
  if (a && b) {
    if (typeof a == "object" && typeof b == "object") {
      if (a instanceof Array && b instanceof Array) {
        res = a.length === b.length && a.every((_, idx) => a[idx] === b[idx]);
      } else {
        res =
          Object.keys(a).length === Object.keys(b).length &&
          Object.keys(a).every((key) => a[key] === b[key]);
      }
    }
  }

  return res;
}

module.exports = deepCompare;
