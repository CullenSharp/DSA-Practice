**
 * Returns true if a given array of non-sorted integers has at least one duplicated value
 * @param {Array<number>} nums
 * @returns boolean
 */
const containsDuplicate = function (nums) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
            return true;
        }
        else {
            seen.set(nums[i], true);
        }
    }
    return false;
};
