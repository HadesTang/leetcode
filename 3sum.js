/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var len = nums.length;
    var answers = [];
    nums = nums.sort(function(a,b){
        return a-b;
    });
    for (var i = 0; i < len-2; i++) {
        if (i == 0 || (i > 0 && nums[i] != nums[i-1])) {
            var start = i+1;
            var end = len-1;
            var sum = 0 - nums[i];
            while (start < end) {
                if (nums[start] + nums[end] == sum) {
                    answers.push([nums[i], nums[start], nums[end]]);
                    while (start < end && nums[start] == nums[start+1]) start++;
                    while (start < end && nums[end] == nums[end-1]) end--;
                    start++; end--;
                } else if (nums[start] + nums[end] < sum) start++;
                else end--;
           }
        }
    }
    return answers;
};