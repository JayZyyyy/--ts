function ListNode(val) {
  this.val = val
  this.next = null
}

var MyLinkedList = function () {
  this.head = null
  this.size = 0
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.size === 0) return -1
  if (index < 0 || index >= this.size) return -1
  let current = this.head
  while (index > 0) {
    current = current.next
    index--
  }
  return current.val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const current = new ListNode(val)
  current.next = this.head
  this.head = current
  this.size++
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.size === 0) {
    this.addAtHead(val)
  } else {
    const tail = this._getItem(this.size - 1)
    if (!tail) return
    const current = new ListNode(val)
    tail.next = current
    this.size++
  }
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return

  if (index <= 0) {
    return this.addAtHead(val)
  }
  if (index === this.size) {
    return this.addAtTail(val)
  }
  const current = new ListNode(val)
  const prev = this._getItem(index - 1)
  current.next = prev.next
  prev.next = current
  this.size++
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.size === 0) return
  if (index < 0 || index >= this.size) return
  if (index === 0) {
    this.head = this.head.next
  }
  if (index > 0 && index < this.size) {
    const prev = this._getItem(index - 1)
    const next = this._getItem(index + 1)
    prev.next = next
  }
  this.size--
}

MyLinkedList.prototype._getItem = function (index) {
  if (this.size === 0) return null
  if (index < 0 || index >= this.size) return null
  let current = this.head
  while (index > 0) {
    current = current.next
    index--
  }
  return current
}

let myLinkedList = new MyLinkedList()
myLinkedList.addAtHead(1)
myLinkedList.addAtTail(3)
myLinkedList.addAtIndex(1, 2) // 链表变为 1->2->3
myLinkedList.get(1) // 返回 2
myLinkedList.deleteAtIndex(1) // 现在，链表变为 1->3
myLinkedList.get(1) // 返回 3
