import { testSort, measureSort } from "hy-algokit"

function insertionSort(arr: number[]): number[] {
  const n = arr.length

  for(let i = 1; i < n; i++) {
    const newNum = arr[i]
    let j = i - 1
    while(arr[j] > newNum && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = newNum
  }

  return arr
}

testSort(insertionSort)

/*
最好情况： O(n)
如果待排序数组已经排好序
那么每个元素只需要比较一次就可以确定它的位置，因此比较的次数为 n-1，移动的次数为 0。
所以最好情况下，插入排序的时间复杂度为线性级别，即 O(n)。
最坏情况： O(n^2)
如果待排序数组是倒序排列的
那么每个元素都需要比较和移动 i 次，其中 i 是元素在数组中的位置。
因此比较的次数为 n(n-1)/2，移动的次数也为 n(n-1)/2。
所以最坏情况下，插入排序的时间复杂度为平方级别，即 O(n^2)。
平均情况：
对于一个随机排列的数组，插入排序的时间复杂度也为平方级别，即 O(n^2)。
**/
