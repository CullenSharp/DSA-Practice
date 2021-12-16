// time: O(2^n)
// space: O(n)

/**
 * Returns the Nth number in the Fibonacci sequence
 * @param {integer} n
 * @returns {integer}
 */
function fib(n) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(3));
// -> 2

console.log(fib(5));
// -> 5
