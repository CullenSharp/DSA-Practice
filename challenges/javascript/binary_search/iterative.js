const search = function (nums, target) {
	let lower = 0;
	let upper = nums.length - 1;

	while (lower <= upper) {
		const middle = Math.floor((lower + upper) / 2);

		if (nums[middle] === target) {
			return middle;
		}

		if (nums[middle] < target) {
			lower = middle + 1;
		} else {
			upper = middle - 1;
		}
	}

	return -1;
};

module.exports = search;
