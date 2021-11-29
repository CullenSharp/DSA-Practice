/**
 * For/of loops expect the target object to be iterable
 * This means the target has a Symbol.iterator method
 */

const fooIterator = "foo"[Symbol.iterator]();
console.log(fooIterator.next());
