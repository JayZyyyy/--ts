function fib(n: number, memo: number[] = []) : number {
  if (n <= 1) return n

  // 求n的值，直接拿到值返回即可
  if (memo[n]) {
    return memo[n]
  }

  // 没有从memo中获取到值
  const res = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = res

  return res
}

console.log(fib(50))

export {}
