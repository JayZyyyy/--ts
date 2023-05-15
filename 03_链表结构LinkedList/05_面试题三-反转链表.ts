class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // 1. 判断节点为null 或只有一个节点，直接返回head
  if (head === null || head.next === null) return head

  // 2. 反转链表结构
  let newHead: ListNode | null = null
  while (head) {
    // 1. 让current指向下一个节点：保留下一个结点的引用
    // 2. 改变head当前指向的节点，指向newHead：对于第一个节点来说，就是指向null
    // 3. 让newHead指向head节点：下一次遍历，第二步操作，可以让下一个节点指向第一个节点
    // 4. 让head移向下一个节点，指向 current
    const current: ListNode | null = head.next
    head.next = newHead
    newHead = head
    head = current
  }

  return newHead
}

const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const newHead = reverseList(node1)
let current = newHead
while (current) {
  console.log(current.val)
  current = current.next
}
export {}
