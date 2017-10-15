/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const length = nums.length;
    if (length < 1) {
        return [-1, -1];
    }
    if (length < 2) {
        if (nums[0] === target) {
            return[0, 0];
        }
        return [-1, -1];
    }
    if (target < nums[0] || target > nums[length - 1]) {
        return [-1, -1];
    }
    var start = 0;
    var end = length - 1;
    while (start <= end) {
        var middle = Math.ceil((start + end) / 2);
        if (target < nums[middle]) {
            end = middle - 1;
        } else if (target > nums[middle]) {
            start = middle + 1;
        } else {
            return getIndex(nums, target, middle);
        }
    }
    return [-1, -1];
};

var getIndex = function(nums, target, middle) {
    var length = nums.length;
    var start = middle;
    var end = middle
    while (start >= 1 && nums[start - 1] === nums[middle]) {
        start --;
    }
    while (end <= length - 2 && nums[end + 1] === nums[middle]) {
        end ++;
    }
    return [start, end];
};