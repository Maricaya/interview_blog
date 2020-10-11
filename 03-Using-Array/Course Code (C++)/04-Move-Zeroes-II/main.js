// leetcode 283
// 将数组中所有 0 挪到末尾，其他元素相对位置不变

function swap(arr, l ,r) {
    [arr[l], arr[r]] = [arr[l], arr[r]]
}
function moveZero(nums) {
    // 时间复杂度:O(n)
    // 空间复杂度:O(n): 可以不可以原地移动呢？
    // k - [0..k) 中保持所有当前遍历过的非 0 元素
    let k = 0; // nums 中，[0 ... k) 的元素均为 非 0 元素
    // 遍历到第 i 个元素后，保证 [0...i] 中所有非 0 元素
    // 都按照顺序排列在 [0...k) 中
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            swap(nums, k++ ,i)
        }
    }
    // nums 剩余位置都放 0
    // for (let i = k; i < nums.length; i++) {
    //     nums[i] = 0;
    // }
}
let a = [123,0, 0, 5, 6]
console.log(moveZero(a))
console.log(a)


// 27. remove elemet
// nums = [3, 2, 2, 3] val = 3
// 返回2，且 nums 前两个元素为 2

// 如何删除？去除还是放在数组尾

// 26. 

// 80.