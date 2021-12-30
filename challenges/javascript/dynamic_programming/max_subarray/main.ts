const maxSubArray = function (nums: Array<number>): number {
  let res: number = -Infinity, localMax: number = 0;
  for (let i = 0; i < nums.length; i++) {
    // Compute local max
    localMax = Math.max(nums[i], nums[i] + localMax);

    // Compute global max
    res = Math.max(res, localMax);
  }
  return res;
}
