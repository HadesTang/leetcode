/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var list = new ListNode();
    list.next = head;
    var temp = list;
    var currentNode;
    while(temp.next) {
        var i = k;
        var currentNode = temp.next;
        var currentArr = [];
        while(i > 0) {
            
            if (!currentNode){
                return list.next;
            }
            i--;
            currentArr.push(currentNode);
            currentNode = currentNode.next;
        }
        var len = currentArr.length;
        while(len > 0) {
            temp.next = currentArr[len - 1];
            len --;
            temp = temp.next;
        }
        temp.next = currentNode;
        
    }
    return list.next;
};