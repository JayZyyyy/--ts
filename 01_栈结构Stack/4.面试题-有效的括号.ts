import ArrayStack from './2.重构栈'

function isValid(s: string): boolean {
  // 1. 创建栈结构
  const stack = new ArrayStack<string>()

  // 2. 遍历s中的所有括号
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    switch (c) {
      case '(':
        stack.push(')')
        break
      case '{':
        stack.push('}')
        break
      case '[':
        stack.push(']')
        break
      default:
        if (c !== stack.pop()) return false
        break
    }
  }
  return stack.isEmpty()
}

// leetCode方法
function isValid1(s: string): boolean {
  let len = s.length
  if (len % 2 !== 0) return false

  let length = len / 2
  for (let i = 0; i < length; i++) {
    s = s.replace('()', '')
    s = s.replace('[]', '')
    s = s.replace('{}', '')
  }
  return s.length === 0
}

// console.log(isValid('()'))
// console.log(isValid('([]){}'))
// console.log(isValid('(]'))

console.log(isValid1('()'))
console.log(isValid1('([]){}'))
console.log(isValid1('(]'))
