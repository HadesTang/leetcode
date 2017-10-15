/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const length = nums.length;
    if (length <= 0) {
        return 0;
    }
    if (target < nums[0]) {
        return 0;
    }
    if (target > nums[length - 1]) {
        return length;
    }
    for (var i = 0; i < length; i++) {
        if (target === nums[i]) {
            return i;
        }
        if (target > nums [i] && i < length - 1 && target < nums[i + 1]) {
            return i + 1;
        }
    }
};