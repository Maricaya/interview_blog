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
*
 */


/*
* 4. 快速排序
* 5. 冒泡排序
* 6. 堆排序
* */
