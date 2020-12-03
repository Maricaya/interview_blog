---
sidebarDepth: 3
---
# TopK 问题

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 快排的思路做
 */

const findKthLargest = function (nums, k) {
  // 找到升序数组第 nums.length - k 位
  return quickSelect(nums, nums.length - k, 0, nums.length - 1)
}

function quickSelect(nums, k, left, right) {
  // 随机取一个数, 计算出她在数组排序之后的位置 index
  const index = partition(nums, left, right)
  // 比较 k 和 index
  if (k === index) {
    return nums[index]
  } else if (k < index) {
    // k 小于 index，左边找
    return quickSelect(nums, k, left, index - 1)
  } else {
    // k 大于 index，右边找
    return quickSelect(nums, k, index + 1, right)
  }
}

function swap(array, l, r) {
  [array[l], array[r]] = [array[r], array[l]]
}

function partition (nums, start, end) {
  // 随机取一个数
  // 这个数放在数组最后, 取这个值作为中介 pivot
  // 遍历 start - end 各个项
  // 小于等于 pivot 的放在数组前列，记录放置到第几位了
  // 返回 pivot 所在的位置（放置的最后一位）
  const randomIndex = Math.floor(Math.random() * (end - start + 1)) + start
  swap(nums, randomIndex, end)
  let pivot = nums[end], j = start
  for (let i = start; i <= end; i++) {
    if (nums[i] <= pivot) {
      swap(nums, i, j++)
    }
  }
  return j - 1
}

```
