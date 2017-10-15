/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var list = new ListNode();
    list.next = head;
    var temp = list;
    var current;
    var last;
    while(temp.next) {
        if(temp.next.next) {
            last = temp.next.next.next;
            current = temp.next;
            temp.next = temp.next.next;
            temp.next.next = current;
            temp.next.next.next = last;
            temp = temp.next.next;
        } else {
            return list.next;
        }
    }
    
    return list.next;
};