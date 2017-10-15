/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var length = s.length;
    if (length <= 0) {
        return 0;
    }
    var strLength = 0;
    var count = 0;
    var start = 0;
    var end = 0;
    var maxLength = 0;
    var firstLeft = s.indexOf('(');
    var lastRight = -1;
    for (var i = 0; i < length; i++) {
        if (s[i] === ')') {
            lastRight = i;
        }
    }
    while (start < length) {
        count = 0;
        for (var i = start; i < length; i++) {
            if (s[i] === '(') {
                count ++;
            } else {
                count --;
            }
            if (count < 0) {
                var tempLength = i - start;
                if (tempLength > maxLength) {
                    maxLength = tempLength;
                }
                start = i + 1;
                break;
            }
            if (count === 0) {
                var tempLength = i - start + 1;
                if (tempLength > maxLength) {
                    maxLength = tempLength;
                }
            }
        }
        if (start > lastRight) {
            return maxLength;
        }
        if (count === 0) {
            return maxLength;
        }
        if (count > 0) {
            start += 1;
        }
        if (maxLength >= length - start - 1) {
            return maxLength;
        }
    }
    return maxLength;
};