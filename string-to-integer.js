/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var flag = 1;
    var i = 0;
    var base = 0;
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = Math.pow(-2, 31);
    if (str.length<=0) {
        return 0;
    }
    while (str[i] === ' '){
        i++;
    }
    if (str[i] === '+' || str[i] === '-'){
        flag = 1 - 2 * (str[i++] === '-')
    }
    while (str[i] >= '0' && str[i] <= 9){
        if (base >  Math.floor(INT_MAX / 10) || (base == Math.floor(INT_MAX / 10) && str[i] - '0' > 7)) {
            return flag === 1 ? INT_MAX : INT_MIN;
        }
        base =  base * 10 + (str[i++] - '0')
    }
    return base * flag;
};