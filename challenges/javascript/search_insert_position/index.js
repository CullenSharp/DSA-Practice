/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums[0] > target) return 0;
    let start = 0, end = nums.length - 1, mid;
    
    while (start <= end) {
        mid = ~~((start + end) / 2);
        
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return target < nums[mid] ? mid : mid + 1;
};

