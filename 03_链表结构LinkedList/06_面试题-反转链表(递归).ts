class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // 如果使用的是递归, 那么递归必须有结束条件
  if (head === null || head.next === null) return head

  const newHead = reverseList(head.next ?? null)

  // 完成想要做的操作是在这个位置
  // 第一次来到这里的时候, 是倒数第二个节点
  head.next.next = head
  head.next = null

  return newHead
}

// 模拟数据进行测试
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
