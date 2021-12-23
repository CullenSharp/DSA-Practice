/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxJump = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    maxJump = Math.max(maxJump, nums[idx] + idx);
    let target = nums.length;

    if (nums[idx] === 0 && maxJump <= idx) {
      return false;
    }
    if (maxJump >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
