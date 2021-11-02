function findEndingPos(nums, target) {
  var low = 0;
  var high = nums.length - 1;
  var index = -1;

  while(low <= high) {
    var mid = parseInt((high + low)/2);

    if (nums[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

    if (nums[mid] === target) {
      index = mid
    }
  }

  return index;
}

function findStartingPos(nums, target) {
  var low = 0;
  var high = nums.length - 1;
  var index = -1;

  while(low <= high) {
    var mid = parseInt((high + low)/2);

    if (nums[mid] >= target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    if (nums[mid] === target) {
      index = mid
    }
  }

  return index;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var result = [];

  result[0] = findStartingPos(nums, target);
  result[1] = findEndingPos(nums, target);

  return result;
}


