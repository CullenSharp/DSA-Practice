/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 || !list2) {
        return list1 || list2;
    }
    
    const res = new ListNode();
    let current = res;
    let l = list1;
    let r = list2;
    
    while (l && r) {
        if (l.val > r.val) {
            current.next = r;
            current = current.next;
            r = r.next;
        } else {
            current.next = l;
            current = current.next;
            l = l.next;
        }
    }
    
    if (l || r) {
        current.next = l || r;
    }
    
    return res.next;
};

