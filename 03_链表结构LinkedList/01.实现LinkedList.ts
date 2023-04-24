// 1. 创建Node节点类
class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

// 2.创建LinkedList的类
class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }

  // 追加节点
  append(value: T) {
    // 1. 根据 value 创建一个节点
    const newNode = new Node(value)

    // 2. 判断 this.head 是否为 null
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      // current 肯定指向最后一个节点
      current.next = newNode
    }

    // size +1
    this.size++
  }

  //  遍历链表方法
  traverse() {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join('->'))
  }

  // 插入方法
  insert(value: T, position: number): boolean {
    // 1. 越界的判断
    if (position < 0 || position > this.size) return false

    // 2. 根据value创建新节点
    const newNode = new Node(value)

    // 3. 判断是否需要插入头部
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position && current) {
        previous = current
        current = current?.next
      }
      newNode.next = current
      previous!.next = newNode
    }
    this.size++
    return true
  }

  // 删除方法
  removeAt(position: number): T | null {
    // 1. 越界的判断
    if (position < 0 || position >= this.size) return null

    // 2. 判断是否是删除第一个节点
    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position && current) {
        previous = current
        current = current.next
      }

      previous!.next = current?.next ?? null
    }
    this.size--
    return current?.value ?? null
  }

  // 获取方法
  get(position: number): T | null {
    // 越界问题
    if (position < 0 || position >= this.size) return null

    // 2.查找元素，并且范围元素
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }

    return current?.value ?? null
  }
}

const linkedList = new LinkedList<string>()
console.log('------------ 测试append ------------')
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.traverse()

console.log('------------ 测试insert ------------')
linkedList.insert('mmm', 0)
linkedList.insert('aab', 2)
linkedList.traverse()

console.log('------------ 测试removeAt ------------')
linkedList.removeAt(0)
linkedList.removeAt(0)
linkedList.traverse()

console.log('------------ 测试get ------------')
console.log(linkedList.get(0))
console.log(linkedList.get(1))
export {}
