/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var x1 = "I";
    var x2 = "II";
    var x3 = "III";
    var x4 = "IV";
    var x5 = "V";
    var x6 = "VI";
    var x7 = "VII";
    var x8 = "VIII";
    var x9 = "IX";
    var x10 = "X";
    var x20 = "XX";
    var x30 = "XXX";
    var x40 = "XL";
    var x50 = "L";
    var x60 = "LX";
    var x70 = "LXX";
    var x80 = "LXXX";
    var x90 = "XC";
    var x100 = "C";
    var x200 = "CC";
    var x300 = "CCC";
    var x400 = "CD";
    var x500 = "D";
    var x600 = "DC";
    var x700 = "DCC";
    var x800 = "DCCC";
    var x900 = "CM"
    var x1000 = "M";
    var x2000 = "MM";
    var x3000 = "MMM";

    var a = [];
    for (var i = 0; i < 4; i++) {
         a[i] = num % 10;
         num = (num - a[i]) / 10;
    }
    
    var str = "";
    while(i > -1) {
        if (a[i]){
            if (i === 3 ) {
                str += eval("x" + a[i] * 1000);
            } else if (i === 2) {
                str += eval("x" + a[i] * 100);
            } else if (i === 1) {
                str += eval("x" + a[i] * 10);
            } else if (i === 0) {
                str += eval("x" + a[i]);
            }
        }
        
        i--;
    }
    return str;
};