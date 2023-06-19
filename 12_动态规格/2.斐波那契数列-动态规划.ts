function fib(n: number): number {
  // 1. 定义状态
  // dp保留斐波那契数列中每一个位置对应的值
  // dp[x]表示的就是x位置对应的值
  // 2. 状态转移方程：dp[i] = dp[i - 1] + dp[i - 2]
  // 状态转移方程一般情况下都是写在循环（for/while）中
  // 3. 设置初始化状态
  // 4. 计算最终的结果

  const dp: number[] = [0, 1]
  for(let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

console.log(fib(10))

export {}
