/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const search = function (
	nums,
	target,
	low = 0,
	high = nums.length - 1,
) {
	const mid = Math.floor(low + ((high - low) / 2));

	switch (true) {
		case nums[mid] === target:
			return mid;
		case nums[mid] > target:
			search(nums, target, low, mid - 1);
			break;
		case nums[mid] < target:
			search(nums, target, mid + 1, high);
			break;
		default:
			return -1;
	}
};

module.exports = search;
