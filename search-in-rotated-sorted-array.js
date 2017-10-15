/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const length = nums.length;
    if (length <= 0) {
        return -1;
    }
    const first = nums[0];
    if (first > target) {
        for (var i = length - 1; i > -1; i--) {
            if (target === nums[i]) {
                return i;
            }
            if (i === 0 || nums[i] < nums[i - 1]) {
                return -1;
            }
        }
    } else {
        for (var i = 0; i < length; i++) {
            if (target === nums[i]) {
                return i;
            }
            if (i === length - 1 || nums[i] > nums[i + 1]) {
                return -1;
            }
        }
    }
};