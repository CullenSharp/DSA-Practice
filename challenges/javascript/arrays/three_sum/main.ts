const threeSum = function (nums: Array<number>): Array<Array<number>> {
  const res: Array<Array<number>> = [];
  if (nums.length < 3) { return res }

  // Sort nums in ascending order
  nums.sort((a: number, b: number) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;

    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Init pointers
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum: number = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        // Store triplet
        res.push([nums[i], nums[j], nums[k]]);

        // Skip duplicates
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        // Update pointers to first unique num
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
}
