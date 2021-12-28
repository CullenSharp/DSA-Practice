class ListNode {
  constructor(val: number, next: ListNode) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

interface ListNode {
  val: number,
  next: ListNode | null
}

var removeNthFromEnd = function (head: ListNode, n: number) {
  // Insert dummy node
  let dummy: ListNode = new ListNode(0, head);
  let left: ListNode = dummy;
  let right: ListNode | null = head;

  // Shift right n times
  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  // Traverse list
  while (right) {
    left = left.next;
    right = right.next;
  }

  // Skip nth from the end
  left.next = left.next.next;
  return dummy.next;
};