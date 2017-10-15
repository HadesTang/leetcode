/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = new Stack();
    for (var i = 0, j = s.length; i < j; i++) {
        if (s[i] === '(') {
            stack.push(')');
        } else if (s[i] === '{') {
            stack.push('}')
        } else if (s[i] === '[') {
            stack.push(']');
        } else if (stack.isEmpty() || stack.pop() !== s[i]) {
            return false;
        }
    }
    if (!stack.isEmpty()) {
        return false;
    }
    return true;
};

function Stack() {
    this.stack = [];
};

Stack.prototype.push = function(item) {
    this.stack.push(item);
}

Stack.prototype.pop = function() {
    var length = this.stack.length;
    if (length > 0) {
        var temp = this.stack[length - 1];
        this.stack.splice(length - 1, 1);
        return temp;
    } else {
        return false;
    }
}

Stack.prototype.isEmpty = function() {
    return this.stack.length <= 0;
}

