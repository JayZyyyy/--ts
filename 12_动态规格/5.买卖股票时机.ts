function maxProfit(prices: number[]) : number {
  const n = prices.length
  if (n <= 1) return 0

  const dp: number[] = []
  dp[0] = 0
  let minPrice = prices[0]
  for(let i = 1; i < n; i++) {
    dp[i] = Math.max(prices[i] - minPrice, dp[i - 1])
    minPrice = Math.min(prices[i], minPrice)
  }

  return dp[n - 1]
}

function maxProfit1(prices: number[]) : number {
  const n = prices.length
  if (n <= 1) return 0

  let preValue = 0
  let minPrice = prices[0]
  for(let i = 1; i < n; i++) {
    // 可以压缩的原因：i位置的值，只和前一个位置有关系
    preValue = Math.max(prices[i] - minPrice, preValue)
    minPrice = Math.min(prices[i], minPrice)
  }

  return preValue
}

