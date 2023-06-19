import { testSort, swap, measureSort } from 'hy-algokit'

function bubbleSort(arr: number[]): number[] {
  const n = arr.length

  for(let i = 0; i < n; i++) {
    let swapped = false
    for(let j = 0; j < n - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = true
      }
    }

    if (!swapped) break
  }
  return arr
}


// testSort(bubbleSort)
measureSort(bubbleSort, 100000)

/*
最好情况：O(n)
即待排序的序列已经是有序的。
此时仅需遍历一遍序列，不需要进行交换操作。
最坏情况：O(n^2)
即待排序的序列是逆序的。
需要进行n-1轮排序，每一轮中需要进行n-i-1次比较和交换操作。
平均情况：O(n^2)
即待排序的序列是随机排列的。
每一对元素的比较和交换都有1/2的概率发生，因此需要进行n-1轮排序，每一轮中需要进行n-i-1次比较和交换操作。
**/
