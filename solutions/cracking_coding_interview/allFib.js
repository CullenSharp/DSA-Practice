// O(2^s)

const fib = require("./nthFibonacci");

/**
 * Prints all Fibonacci numbers from 0->N
 * @param {integer} n
 */
function allFib(n) {
  for (let i = 0; i < n; i++) {
    console.log(i + ":" + fib(i));
  }
}

module.exports = allFib;
