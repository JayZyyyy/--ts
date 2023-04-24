// 栈对数组有限制

import IStack from './IStack'

// 封装一个栈
class ArrayStack<T = any> implements IStack<T> {
  // 定义一个数组/链表，用于存储元素
  private data: T[] = []

  // 实现栈中相关的操作方法
  // push方法，将一个元素压入栈中
  push(element: T): void {
    this.data.push(element)
  }

  // pop方法，将栈顶元素弹出栈，返回出去，并且从栈移除掉
  pop(): T | undefined {
    return this.data.pop()
  }

  // peek方法: 看一眼栈顶元素，并且不进行任何操作
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  // isEmpty 判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 返回栈的数据个数
  size(): number {
    return this.data.length
  }
}

export default ArrayStack
