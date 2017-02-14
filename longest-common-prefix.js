/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <= 0) {
        return "";
    }
    var current = strs[0];
    var i = 1;
    while(i < strs.length) {
        current = compare(current, strs[i])
        i++;
        if (!current){
            return current;
        }
    }
    return current;
};

var compare = function (a, b) {
    if (a.length <= 0 || b.length <= 0){
        return "";
    }
    while(b.indexOf(a) != 0){
        a = a.substr(0, a.length - 1);
    }
    return a;
};