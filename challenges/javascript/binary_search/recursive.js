/* eslint-disable max-params */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const defaultCompare = function (a, b) {
	return (
		a > b ? 1 : (a < b ? -1 : 0)
	);
};

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
	compare = defaultCompare,
) {
	if (low > high) {
		return -1;
	}

	const mid = Math.floor((high + low) / 2);
	const comparison = compare(target, nums[mid]);

	return (
		comparison === -1
			? search(nums, target, low, mid - 1)
			: comparison === 1
				? search(nums, target, mid + 1, high)
				: mid
	);
};

module.exports = search;
