/**
 * Solves in O(n)
 * Uses a map for instant lookups and iterates through a array
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if ((target - num) in numMap) {
            return [numMap[(target - num)], i]
        }
        numMap[num] = i;
    } 
}

