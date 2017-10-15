/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var letters = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    var digitsArr = digits.split("");
    if (digitsArr.length <= 0){
        return [];
    }
    return digitsArr.reduce(function(a, b){
        
        if (b > 1){
            var c = letters[b-2].split("");
            return maxtrixCompute(a, c);
        } else {
            return a;
        }
    },[""]);
};

var maxtrixCompute = function(a, b){
    var arr = [];
    for(var i = 0; i < a.length; i++){
        for (var j = 0; j < b.length; j++){
            arr.push(a[i].concat(b[j]));
        }
    }
    return arr;
}


