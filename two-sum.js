/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    var exist = {}
    for(var i = 0; i < len; i++){
       if (exist[target - nums[i]] !== undefined){
           return [exist[target-nums[i]], i];
       }
       exist[nums[i]] = i
    }
};