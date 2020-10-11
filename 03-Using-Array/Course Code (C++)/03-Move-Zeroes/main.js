// 如何写出正确的程序？
// 1.明确变量的含义 2.循环不变量 3.小数据量调试

// leetcode 283
// 将数组中所有 0 挪到末尾，其他元素相对位置不变

function moveZero(nums) {
    // 时间复杂度:O(n)
    // 空间复杂度:O(n)
    const nonZeroElements = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nonZeroElements.push(nums[i])
        }
    }
    for (let i = 0; i < nonZeroElements.length; i++) {
        nums[i] = nonZeroElements[i]        
    }
    for (let i = nonZeroElements.length; i < nums.length; i++) {
        nums[i] = 0        
    }
    // nums = nonZeroElements.concat(new Array(nums.length - nonZeroElements.length).fill(0))
    return nums
}
let a = [123,0, 0, 5, 6]
console.log(moveZero(a))
console.log(a)