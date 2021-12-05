/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
    let cur = head;
    let carry = 0;
    
    while(l1 || l2 || carry) {
        let v1 = l1 ? l1.val : 0
        let v2 = l2 ? l2.val : 0
        
        // Compute digit
        let val = v1 + v2 + carry;
        carry = ~~(val / 10);
        val = val % 10;
        cur.next = new ListNode(val);
        
        // Update pointers
        cur = cur.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return head.next;
}

