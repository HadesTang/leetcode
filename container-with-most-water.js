/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length;
    var start = 0;
    var end = len - 1;
    var max = Math.min(height[start], height[end]) * (end - start);
    while(start < end - 1) {
        if (height[start] < height[end]) {
            if (height[start + 1] > height[start]) {
                var area = Math.min(height[start + 1], height[end]) * (end - start - 1);
                if ( area > max) {
                    max = area;
                }
            }
            start ++;
        } else {
            if (height[end - 1] > height[end]) {
                var area = Math.min(height[end - 1], height[start]) * (end - start - 1);
                if ( area > max) {
                    max = area;
                }
            }
            end --;
        }
    }
    return max;
};