/**
 * Returns true if a given array of non-sorted integers has at least one duplicated value
 * @param {Array<number>} nums
 * @returns boolean
 */
const containsDuplicate = function (nums: Array<number>): boolean {
  const seen = new Map<number, boolean>();

  for (let i: number = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    } else {
      seen.set(nums[i], true);
    }
  }
  return false;
}
