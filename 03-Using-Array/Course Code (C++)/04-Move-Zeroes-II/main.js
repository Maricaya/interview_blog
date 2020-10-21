// LeetCode 283
// 将数组中所有 0 挪到末尾，其他元素相对位置不变

function swap(arr, l ,r) {
    [arr[l], arr[r]] = [arr[r], arr[l]]
}
function moveZero(nums) {
    // 时间复杂度:O(n)
    // 空间复杂度:O(n): 可以不可以原地移动呢？
    // k - [0..k) 中保持所有当前遍历过的非 0 元素
    let k = 0; // nums 中，[0 ... k) 的元素均为 非 0 元素
    // 遍历到第 i 个元素后，保证 [0...i] 中所有非 0 元素
    // 都按照顺序排列在 [0...k) 中
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            swap(nums, k, i)
            k++
        }
    }
    return nums
}
let a = [123,0, 0, 5, 6]
console.log(moveZero(a))

// 27. remove element
// nums = [3, 2, 2, 3] val = 3
// 返回2，且 nums 前两个元素为 2

// 如何删除？去除还是放在数组尾

// 26.

// 80.

// 总结：计算机只用看第一项怎么做的
/*
* 找到第一个不相等的，把第3位赋值给他
*
* */
/**
 * 1, 1, 1, 1, 2, 2
 *    j  i
 * j-1         i  相等
 *       j++ = i
 *
 */
