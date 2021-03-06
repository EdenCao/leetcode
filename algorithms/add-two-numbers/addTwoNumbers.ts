import { ListNode } from "@helper/ListNode";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode {
  let l1Val: number;
  let l2Val: number;
  const head: ListNode = new ListNode(-1, null);
  let pointer = head;
  let carry: 0 | 1 = 0;

  while ((l1 && l1.val >= 0) || (l2 && l2.val >= 0) || carry > 0) {
    l1Val = (l1 && l1.val) || 0;
    l2Val = (l2 && l2.val) || 0;

    let sum = l1Val + l2Val + carry;
    carry = 0;

    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    }

    pointer.next = new ListNode(sum, null);
    pointer = pointer.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return head.next!;
}
