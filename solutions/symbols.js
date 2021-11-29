/**
 * Symbols, like objects and arrays, are unique between themselves
 * While "string" and "string" are are functionally the same as strings
 * Symbols are not
 */

let sym = Symbol("name");
console.log(sym == Symbol("name"));
console.log(sym);
