// 1. 插入排序
/*
* 像摸牌一样,从小到大排序
* - 第一位是有序的，i 从 1 开始 [1...i]
* - j 的范围 (0...i]
*   - 比较 j j-1
*     - 如果 j 小于 j-1，交换位置
*     - 否则 终止当前循环，break
* */
function swap(arr, l ,r) {
  [arr[l], arr[r]] = [arr[r], arr[l]]
}
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        swap(arr, j, j-1)
      }
      else {
        break
      }
    }
  }
  return arr
}
const a = [5, 6, 1, 2, 99]
console.log(insertSort(a))

// 2. 选择排序
/*
* 找到当前最小值，和当前第一位交换位置
* - 外层循环 i [0...i]
* - 设置当前第一位 i 为 min
*   - j [i+1...n) 找最小值
* */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr, i, min)
  }
  return arr
}
const b = [5, 6, 1, 2, 99, 9]
console.log(selectionSort(b))

/*
* 3. 归并排序
*  分为两半 mid = Math.floor(arr.length / 2)
*  如果 mid < 1 终止循环
*   递归排
*     左边 arr.slice(0, mid) 右边 arr.slice(mid)
*   合并两个有序数组
 */
function merge (left, right) {
  const result = []
  let i = 0, j = 0
  while (left.length > i && right.length > j) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }
  if (i < left.length) {
    result.push(...left.slice(i))
  } else {
    result.push(...right.slice(j))
  }
  return result
}

function mergeSort (arr) {
  let mid = Math.floor(arr.length / 2)
  if (mid < 1) {
    return arr
  }
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

const c = [5, 6, 1, 2, 99, 9]
console.log(mergeSort(c))
/*
* * 4. 快速排序
* 随机取一个中间值
*   大于它的排在左边，小于它的排在右边
*   左右递归排序
* */
function partition(array, start, end) {
  let index = Math.floor(Math.random()*(end -start + 1) + start)
  swap(array, index, end)
  let pivot = array[end]
  let j = start
  for (let i = start; i <= end; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j)
      j++
    }
  }
  return j - 1
}
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (end - start < 1) return arr
  let pivotIndex = partition(arr, start, end)
  quickSort(arr, start, pivotIndex - 1)
  quickSort(arr, pivotIndex, end)
  return arr
}
const d = [5, 6, 1, 2, 99, 9]
console.log(quickSort(d))

/*
* 5. 冒泡排序
* 6. 堆排序
* */
