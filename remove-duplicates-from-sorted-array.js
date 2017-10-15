/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var map = {};
    for (var i= 0; i < nums.length;) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
            i++;
        } else {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};