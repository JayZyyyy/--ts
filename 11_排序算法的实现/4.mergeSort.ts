import { testSort, measureSort } from "hy-algokit"

function mergeSort(arr: number[]) : number[] {
  if(arr.length <= 1) return arr
  
  // 1.1. 切割数组
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  // 1.2.递归的切割leftArr和rightArr
  const newLeftArr = mergeSort(leftArr)
  const newRightArr = mergeSort(rightArr)

  const newArr: number[] = []
  let i = 0
  let j = 0
  while (i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] <= newRightArr[j]) {
      newArr.push(newLeftArr[i])
      i++
    } else {
      newArr.push(newRightArr[j])
      j++
    }
  }

  if (i < newLeftArr.length) {
    newArr.push(...newLeftArr.slice(i))
  }
  if (j < newRightArr.length) {
    newArr.push(...newRightArr.slice(j))
  }

  return newArr
}


testSort(mergeSort)
measureSort(mergeSort, 1000000)

/**
复杂度的分析过程：
假设数组长度为 n，需要进行 logn 次归并操作；
每次归并操作需要 O(n) 的时间复杂度；
因此，归并排序的时间复杂度为 O(nlogn)
最好情况： O(log n)
最好情况下，待排序数组已经是有序的了，那么每个子数组都只需要合并一次，即只需要进行一次归并操作。
因此，此时的时间复杂度是 O(log n)。
最坏情况： O(nlogn)
最坏情况下，待排序数组是逆序的，那么每个子数组都需要进行多次合并。
因此，此时的时间复杂度为 O(nlogn)。
平均情况： O(nlogn)
在平均情况下，我们假设待排序数组中任意两个元素都是等概率出现的。
此时，可以证明归并排序的时间复杂度为 O(nlogn)。
 */ 
