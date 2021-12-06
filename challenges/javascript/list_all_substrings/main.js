/**
 * Write an algorithm that prints all the substrings of a given string
 * A substring is a contigous string of characters within a string
 * apple ->
 * a
 * p
 * l
 * e
 * ap
 * pl
 * le
 * app
 * ppl
 * ple
 * appl
 * pple
 * apple
 */

// Prints repeats
// O(n^2) substrings for any string
function printSubstrings(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      console.log(string.slice(i, j));
    }
  }
}

printSubstrings("apple");
/**
 * "a"
 * "ab"
 * "abc"
 * "abcd"
 * "b"
 * "bc"
 * "bcd"
 * "c"
 * "cd"
 * "d"
 */
