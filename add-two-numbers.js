/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var c1 = l1;
    var c2 = l2;
    var c = new ListNode(0);
    var d = c;
    while(c1!==null || c2!== null){
        c1 = c1 || new ListNode(0);
        c2 = c2 || new ListNode(0);
        var sum = c1.val + c2.val + c.val;
        var pro = sum % 10;
        var value = (sum - pro) / 10;
        c.val = pro;
        c1 = c1.next;
        c2 = c2.next;
        if (c1 || c2 || value > 0){
            c.next = new ListNode(0);
            c = c.next;
            c.val = value;
        }
    }
    return d
};