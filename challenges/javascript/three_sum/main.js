/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  const res = [];

  // Sort nums in ascending order
  nums.sort((a, b) => a - b);

  // Set left pointer
  for (let i = 0; i < nums.length - 2; i++) {
    // Break if ith value > 0
    if (nums[i] > 0) break;

    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Set middle pointer
    let j = i + 1;

    // Set right pointer
    let k = nums.length - 1;

    // Search between i and k
    while (j < k) {
      // Compute sum (ith + jth + kth)
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);

        // Skip duplicates
        while (nums[j] === nums[j + 1]) {
          j++;
        }
        while (nums[k] === nums[k - 1]) {
          k--;
        }

        // Move pointers
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};
