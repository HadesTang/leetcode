/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var count = 0;
    for (var i = 0; i < nums.length;) {
        if (nums[i] != val) {
            count ++;
            i ++;
        } else {
            nums.splice(i, 1)
        }
    }
    return count;
};