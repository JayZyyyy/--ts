import { testSort, swap, measureSort } from "hy-algokit"

function selectionSort(arr: number[]): number[] {
  const n = arr.length

  // 外层循环作用: 经过多少轮的找最小值
  for(let i = 0; i < n -1; i++) {
    let minIndex = i
    // 内层循环作用: 每次找到最小值
    for(let j = 1 + i; j < n; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    // 只有不相等时, 才需要进行交换操作
    if(i !== minIndex) {
      swap(arr, i, minIndex)
    }
  }
  return arr
}

testSort(selectionSort)

/*
最好情况时间复杂度：O(n^2)
最好情况是指待排序的数组本身就是有序的。
在这种情况下，内层循环每次都需要比较 n-1 次，因此比较次数为 n(n-1)/2，交换次数为 0。
所以，选择排序的时间复杂度为 O(n^2)。
最坏情况时间复杂度：O(n^2)
最坏情况是指待排序的数组是倒序排列的。
在这种情况下，每次内层循环都需要比较 n-i-1 次，因此比较次数为 n(n-1)/2，交换次数也为 n(n-1)/2。
所以，选择排序的时间复杂度为 O(n^2)。
平均情况时间复杂度：O(n^2)
平均情况是指待排序的数组是随机排列的。
在这种情况下，每个元素在内层循环中的位置是等概率的，因此比较次数和交换次数的期望值都是 n(n-1)/4。
所以，选择排序的时间复杂度为 O(n^2)。
**/
