const findDisappearedNumbers = function (nums: Array<number>): Array<number> {
  let res: Array<number> = [];

  // Flip nums
  for (let i = 0; i < nums.length; i++) {
    let absNum: number = Math.abs(nums[i]);
    let idx: number = absNum - 1;
    nums[idx] = Math.abs(nums[idx]) * - 1;
  }

  // Find intersection
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
      res.push(j);
    }
  }

  return res;
}
