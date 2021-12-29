const missingNumber = function (nums: Array<number>): number {
  // Compute sum of series N
  let n: number = nums.length;
  let sN: number = (n * (n + 1)) / 2;
  let sum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sN - sum;
};