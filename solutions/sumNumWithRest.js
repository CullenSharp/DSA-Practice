/**
 * Takes in an indefinite number of individual numbers and returns their sum
 * @param  {...number} numbers
 * @returns {number} sum of arguments
 */
function sumNumbers(...numbers) {
  let sum = 0;
  for (number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumNumbers(1, 2, 3, 4, 5, 6));
