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
    this.group = [];
  }

  /**
   * returns a boolean if its argument is a member of the group
   * @param {num} value
   * @returns {bool}
   */
  has(value) {
    return this.group.indexOf(value) !== -1;
  }

  /**
   * Adds its argument if it isn't already in the group
   * @param {num} value
   */
  add(value) {
    if (!this.has(value)) {
      this.group.push(value);
    }
  }

  /**
   * Removes its argument from the group
   * @param {num} value
   */
  delete(value) {
    if (this.has(value)) {
      this.group = this.group.filter((item) => item !== value);
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

  [Symbol.iterator] = function () {
    return new GroupIterator(this);
  };
}

class GroupIterator {
  constructor({ group }) {
    this.current = 0;
    this.group = group;
  }

  next() {
    if (this.current >= this.group.length) return { done: true };

    let value = this.group[this.current];
    this.current++;
    return { value, done: false };
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
