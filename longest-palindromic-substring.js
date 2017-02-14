/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length;
    if (len <= 1) return s;
    var min_start = 0, max_len = 1;
    for (var i = 0; i < len;) {
      if (len - i <= max_len / 2) break;
      var j = i, k = i;
      while (k < len-1 && s[k+1] == s[k]) ++k; // Skip duplicate characters.
      i = k+1;
      while (k < len-1 && j > 0 && s[k + 1] == s[j - 1]) { ++k; --j; } // Expand.
      var new_len = k - j + 1;
      if (new_len > max_len) { min_start = j; max_len = new_len; }
    }
    return s.substr(min_start, max_len);
};