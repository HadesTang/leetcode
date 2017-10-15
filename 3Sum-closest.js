/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort(function(a, b) {
        return a - b;
    })
    var len = nums.length;
    var currentSum = nums[0] + nums[1] + nums[len - 1];
    var currentAbs = Math.abs(currentSum - target)
    for (var i = 0; i < len - 2; i++) {
        var sum = target - nums[i];
        var j = i + 1; 
        var k = len - 1;
        if (nums[j] + nums [k] == sum) {
            return target;
        } else {
            while(j < k) {
                var tempSum = nums[i] + nums[j] + nums[k];
                var tempAbs = Math.abs(tempSum - target);
                if (tempAbs < currentAbs) {
                    currentSum = tempSum;
                    currentAbs = tempAbs;
                }
                if (nums[j] + nums[k] < sum) {
                    j++;
                } else {
                    k--;
                }
            }
        }
    }
    return currentSum;
};