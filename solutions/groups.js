/**
 * Implement a class for Group
 * Essentially, a DIY implementation of Set
 *
 * Has method returns a boolean if its argument is a member of the group
 * Add adds its argument if it isn't already in the group
 * Delete removes its argument from the group
 */

class Group {
  constructor() {
    this.group = {};
  }

  /**
   * returns a boolean if its argument is a member of the group
   * @param {num} value
   * @returns {bool}
   */
  has(value) {
    return this.group.hasOwnProperty(value);
  }

  /**
   * Adds its argument if it isn't already in the group
   * @param {num} value
   */
  add(value) {
    if (!this.has(value)) {
      this.group[value] = value;
    }
  }

  /**
   * Removes its argument from the group
   * @param {num} value
   */
  delete(value) {
    if (this.has(value)) {
      delete this.group[value];
    }
  }

  /**
   * Generates an instance of group from the elements of an iterable object
   * @param {array} iterable
   * @returns {group} group
   */
  static from(array) {
    let group = new Group();
    for (let element of array) {
      group.add(element);
    }

    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true

console.log(group.has(30));
// → false

group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
