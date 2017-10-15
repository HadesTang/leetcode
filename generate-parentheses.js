/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var list = [];
    renderList(list, "", 0, 0, n)
    return list;
};
function renderList(list, str, open, close, n) {
    if (str.length >= 2 * n) {
        list.push(str);
        return;
    }
    if (open < n) {
        renderList(list, str + '(', open + 1, close, n);
    }
    if (close < open) {
        renderList(list, str + ')', open, close + 1, n);
    }
}