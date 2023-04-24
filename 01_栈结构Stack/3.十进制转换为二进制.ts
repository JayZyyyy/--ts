import ArrayStack from './2.重构栈'

function decimalToBinary(decimal: number): string {
  // 1. 创建一个栈，用于存放余数
  const stack = new ArrayStack<number>()

  // 2. 使用循环
  while (decimal > 0) {
    const result = decimal % 2
    stack.push(result)

    decimal = Math.floor(decimal / 2)
  }

  // 3. 所有的余数取出
  let binary = ''
  while (!stack.isEmpty()) {
    binary = binary + stack.pop()
  }

  return binary
}

console.log(decimalToBinary(35))
