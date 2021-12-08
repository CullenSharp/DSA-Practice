/**
 * Sliding window example
 * Find the largest sum of 5 consecutive numbers in an array
 */

// Brute force approach O(n*k)
const target = [5, 7, 1, 4, 3, 6, 2, 9, 2];

function largestSumOfFive(arr) {
  let res = -Infinity;

  // Get starting pos
  for (let start = 0; start <= arr.length - 5; start++) {
    let currSum = 0;

    // Get sum of current sequence
    for (let end = start; end < start + 5; end++) {
      currSum += arr[end];
    }

    // Compute largest sum
    res = Math.max(res, currSum);
  }

  return res;
}

// Sliding window approach O(n)

function getSumOfInitialSequence(arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
}

function slidingWindowSumOfSequence(arr, n = 5) {
  let res = getSumOfInitialSequence(arr, n);
  let left = 0;
  let currSum = res;
  for (let right = n; right < arr.length; right++) {
    currSum -= arr[left];
    currSum += arr[right];
    left++;

    res = Math.max(res, currSum);
  }

  return res;
}

console.log(slidingWindowSumOfSequence(target, 8));
