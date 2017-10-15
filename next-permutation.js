/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var length = nums.length;
    if (length <= 0) {
        return;
    }
    for (var i = length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            var start = i - 1;
            for (var j = start + 1; j < length; j++) {
                if (nums[start] >= nums[j]) {
                    swap(nums, start, j - 1);
                    reverse(nums, start + 1, length - 1);
                    return;
                }
                if (j === length - 1) {
                    swap(nums, start, j);
                    reverse(nums, start + 1, length - 1);
                    return;
                }
            }
        }
    }
    reverse(nums, 0, length - 1);
};

var swap = function(nums, i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

var reverse = function (nums, i, j) {
    while(i < j) {
        if (nums[i] > nums[j]) {
            swap(nums, i, j);
        }
        i++;
        j--;
    }   
};