/**
 * Takes a list and returns an array of n length
 * @param list
 * @returns array
 */
function listToArray(list) {
  let res = [];
  let current = list;

  while (current) {
    res.push(current.value);
    current = current.next;
  }

  return res;
}

module.exports = listToArray;
