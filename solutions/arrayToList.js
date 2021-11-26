/**
 * Takes an array and returns a singly linked list of n length with n elements
 * @param array
 * @returns linked list
 */
function arrayToList(array) {
  class List {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  const res = new List(array[0]);
  let current = res;

  for (let i = 1; i < array.length; i++) {
    current.next = new List(array[i]);
    current = current.next;
  }

  return res;
}

module.exports = arrayToList;
