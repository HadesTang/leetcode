/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (s.length <=0 || words.length <= 0) {
        return [];
    }
    var incides = [];
    var map = {};
    words.map(function(word) {
        map[word] = map[word] ? ++map[word] : 1;
    });
    var wl = words[0].length;
    var wc = words.length;
    var len = s.length - wl;
    for (var i = 0; i < wl; i++) {
        var countMap = {};
        var count = 0;
        for (var j = i, start = j; j <= len; j +=wl) {
            var currentWord = s.slice(j, j + wl);
            if (map[currentWord] && (!countMap[currentWord] || countMap[currentWord] < map[currentWord])) {
                count ++;
                countMap[currentWord] = countMap[currentWord] ? ++countMap[currentWord] : 1;
                if (count < wc) {
                    
                } else {
                    incides.push(start);
                    countMap[s.slice(start, start + wl)]--;
                    count --;
                    start += wl;
                }
            } else if (!map[currentWord]) {
                count = 0;
                countMap = {};
                start = j + wl;
            } else {
                countMap[currentWord] ++;
                while(countMap[currentWord] > map[currentWord]) {
                    var str1 = s.slice(start, start + wl);
                    countMap[str1]--;
                    if (countMap[str1] < map[str1]) count--;
                    start += wl;
                }
            }
        }
    }
    return incides;
};