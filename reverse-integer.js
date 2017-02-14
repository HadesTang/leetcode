/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var flag;
    if (x < 0){
        x = -x;
        flag = true;
    }
    var a = [];
    var i = 0;
    while(x > 0){
        a[i] = x % 10;
        x = Math.floor(x / 10);
        i++;
    }
    var res = 0;
    i--;
    var k = i;
    while(i > -1){
        res += a[i] * Math.pow(10, k-i);
        i--;
    }
    if (res > 2147483647){
        return 0;
    }
    return flag?-res:res
};