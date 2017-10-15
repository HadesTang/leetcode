/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) {
        return 0;
    }
    if (divisor === 0) {
        return Infinity;
    }
    var isNeg = false;
    if (dividend > 0 && divisor < 0 || dividend < 0 && divisor > 0) {
        isNeg = true;
    }
    var MAX_INT = Math.pow(2, 31);
    var NEXT_INT = Math.pow(2, 30);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if (dividend < divisor) {
        return 0;
    }
    if (dividend > MAX_INT) {
        return isNeg ? - MAX_INT : MAX_INT - 1;
    }
    var dynamicDivisor = divisor;
    var repeat = 0;
    while (dividend >= divisor) {
        var count = 0;
        while (dividend >= dynamicDivisor) {
            if (dynamicDivisor === NEXT_INT) {
                dynamicDivisor = - (dynamicDivisor << 1);
                count++;
                break;
            } else if (dynamicDivisor < NEXT_INT) {
                dynamicDivisor = dynamicDivisor << 1;
                count++;
            } else {
                count++;
                break;
            }
        }
        repeat += Math.pow(2, count - 1);
        if (count > 1) {
            dividend -= divisor << (count - 1);
        } else {
            dividend -= divisor
        }
        dynamicDivisor = divisor;
    }
    return isNeg ? -repeat : (repeat >= MAX_INT ? MAX_INT - 1 : repeat);
    
};