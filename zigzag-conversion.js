/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len = s.length - 1;
    var str = "";
    if (numRows <= 1){
        return s;
    }
    if (len < numRows){
        return s;
    }
    var arr = [];
    for (var i = 0; i < numRows; i++){
        arr[i] = "";
        var k = i;
        while(k <= len){
            arr[i] += s[k];

            if (i!==0 && i != numRows-1){
                if (k + 2*(numRows-1-i) <= len)
                    arr[i] += s[k + 2*(numRows-1-i)];
            }
            k += 2*(numRows - 1);
        }
    }
    return arr.join("");
};