/**
 * 哈希函数, 将key映射成index
 * @param key 转换的key
 * @param max 数组的长度(最大的数值)
 * @returns 索引值
 */

function hashFunc(key: string, max: number) : number {
  // 1. 计算hashCode cats => 60337(27)为底的时候
  let hashCode = 0
  const length = key.length
  for(let i = 0; i < length; i++) {
    hashCode = 31 * hashCode + key.charCodeAt(i)
  }

  // 2.求出索引值
  const index = hashCode % max

  return index
}

console.log(hashFunc("abc", 7))
console.log(hashFunc("cba", 7))
console.log(hashFunc("nba", 7))
// console.log(hashFunc("mba", 7))
// console.log(hashFunc("aaa", 7))
// console.log(hashFunc("bbb", 7))
