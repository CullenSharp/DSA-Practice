const search = function (
	nums,
	target,
	lower = 0,
	upper = nums.length - 1,
) {
	const middle = Math.floor((upper + lower) / 2);

	if (nums[middle] === target) {
		return middle;
	}

	if (lower > upper) {
		return middle;
	}

	if (nums[middle] < target) {
		search(nums, target, middle + 1, upper);
	} else {
		search(nums, target, lower, middle - 1);
	}
};

module.exports = search;
