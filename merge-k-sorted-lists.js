/**
 * Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var mergedList = new ListNode();
    var currentNode = mergedList;
    for (var i = 0; i < lists.length;) {
        if (!lists[i]) {
            lists.splice(i, 1);
        } else {
            i++;
        }
    }
    lists = lists.sort(sortByValue);
    while(lists.length > 0) {
        currentNode.next = lists[0];
        currentNode = currentNode.next;
        lists[0].next ? (lists[0] = lists[0].next) : (lists.splice(0, 1));
        lists = lists.length > 0 ? simpleSort(lists): [];
    }
    return mergedList.next;
    
    
};

function simpleSort(lists) {
    for (var i = 0, j = lists.length; i < j - 1; i++) {
        if (lists[0].val >= lists[i].val && lists[0].val <= lists[i+1].val) {
            return lists.slice(1, i + 1).concat(lists[0]).concat(lists.slice(i + 1))
        }
    }
    return lists.slice(1, i+1).concat(lists[0]);
}

function sortByValue(a, b) {
    return a.val - b.val;
}