function fib(n: number): number {
  if (n <= 1) return n
  // 1. 定义状态
  let prev = 0
  let cur = 1
  // 2. 状态转移方程：dp[i] = dp[i - 1] + dp[i - 2]
  // 状态转移方程一般情况下都是写在循环（for/while）中
  // 3. 设置初始化状态
  // 4. 计算最终的结果

  for(let i = 2; i <= n; i++) {
    const newValue = prev + cur
    prev = cur
    cur = newValue
  }
  return cur
}

console.log(fib(10))
