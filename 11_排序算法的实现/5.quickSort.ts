import { swap, testSort, measureSort } from "hy-algokit"

function quickSort(arr: number[]) : number[] {
  partition(0, arr.length -1)

  function partition(left: number, right: number) {
    if (left >= right) return

    // 1. 找基准元素
    const pivot = arr[right]

    // 2. 双指针进行交换操作
    let i = left
    let j = right - 1

    while(i <= j) {
      // 找到一个比pivot大的元素
      while(arr[i] < pivot) {
        i++
      }
      // 找到一个比pivot小的元素
      while(arr[j] > pivot) {
        j--
      }

      // 说明我们已经找到了(比pivot大的元素i)和(比pivot小的j的元素)
      if(i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }

    // 将pivot放在正确的位置
    swap(arr, i, right)

    // 左右继续划分区域(partition)
    partition(left, j)
    partition(i + 1, right)
  }

  return arr
}

testSort(quickSort)
measureSort(quickSort, 1000000)

/**
最好情况： O(nlogn)
当每次划分后，两部分的大小都相等，即基准元素恰好位于数组的中间位置，此时递归的深度为 O(log n)。
每一层需要进行 n 次比较，因此最好情况下的时间复杂度为 O(nlogn)。
最坏情况： O(n^2)
当每次划分后，其中一部分为空，即基准元素是数组中的最大或最小值，此时递归的深度为 O(n)。
每一层需要进行 n 次比较，因此最坏情况下的时间复杂度为 O(n^2)。
需要注意的是，采用三数取中法或随机选择基准元素可以有效避免最坏情况的发生。
平均情况： O(nlogn)
在平均情况下，每次划分后，两部分的大小大致相等，此时递归的深度为 O(log n)
每一层需要进行大约 n 次比较，因此平均情况下的时间复杂度为 O(nlogn)。
 */
