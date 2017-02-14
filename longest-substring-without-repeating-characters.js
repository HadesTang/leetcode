/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    if (len <= 0){
        return 0;
    }
    var maxLen = 1;
    var start = 0;
    var end = 0;
    var hash = {};
    for (;end < len; end++){
        if (hash[s[end]] !== undefined){
            start = Math.max(start, hash[s[end]]+1);
        }
        hash[s[end]] = end;
        maxLen = Math.max(maxLen, end-start+1)
    }
    return maxLen;
};