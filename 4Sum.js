/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 
var fourSum = function(nums, target) {
    var arr = [];
    var sortedNums = nums.sort(function(a, b){
        return a - b;
    });
    var len = sortedNums.length;
    for(var index1 = 0, i = len - 3; index1 < i; index1++) {
        for(var index2 = index1 + 1, j = len - 2; index2 < j; index2++) {
            var index3 = index2 + 1;
            var index4 = len - 1;
            while (index3 < index4) {
                var sum = sortedNums[index1] + sortedNums[index2] + sortedNums[index3] + sortedNums[index4];
                if (sum === target) {
                    arr.push([sortedNums[index1], sortedNums[index2], sortedNums[index3], sortedNums[index4]]);
                    while(sortedNums[index3] === sortedNums[++index3]);
                    while(sortedNums[index4] === sortedNums[--index4]);
                } else if (sum > target) {
                    index4--;
                } else {
                    index3++;
                }
            }
            while(sortedNums[index2] == sortedNums[++index2]);
            index2 --;
        }
        while(sortedNums[index1] == sortedNums[++index1]);
        index1--;
    }
    return arr;
};