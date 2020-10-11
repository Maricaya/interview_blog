// 面试中的01背包问题
// 416. partition equal subset sum
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 选出物品，填满 sum/2
/* 
F(n, C) 考虑将 n 个物品填满容量为 C 的背包
F(i,c) = F(i-1, c) || F(i-1, c-w[i])
*/
var canPartition = function(nums) {
    const sum = nums.reduce((res, cur) => res + cur)
    if (sum%2 !== 0) {
        return false;
    }
    const C = sum/2
    // memo[i][c],使用索引为[0...i]的元素，是否可以完全填充一个容量为c的背包
    // -1 未计算，false 不可填充，true 可填充
    const memo = new Array(nums.length).fill(-1).map(() => new Array(C + 1).fill(-1))
    return tryPartition(nums, nums.length - 1, C, memo)
};
// 使用nums[0...index]，是否可以完全填充一个容量为 sum 的背包
function tryPartition(nums, index, sum, memo) {
    if (sum === 0) {
        return true
    }
    if (sum < 0 || index < 0) {
        return false
    }
    if (memo[index][sum] !== -1) {
        return memo[index][sum]
    }
    memo[index][sum] = tryPartition(nums, index-1, sum, memo) || tryPartition(nums, index-1, sum-nums[index], memo)
    return memo[index][sum]
}

// 方法2
var canPartition = function(nums) {
    const sum = nums.reduce((res, cur) => res + cur)
    if (sum%2 !== 0) {
        return false;
    }
    const C = sum/2
    const n = nums.length
    const memo = new Array(C + 1).fill(false)

    for (let i = 0; i <= C; i++) {
        memo[i] = (nums[0] === i)
    }
    for (let i = 1; i < array.length; i++) {
        for (let j = C; j >= nums[i]; j--) {
            memo[j] = memo[j] || memo[j-nums[i]]
        }
    }
    return memo[C]
}
// 322. coin change
// 377. combination sum |V
// 474. ones and zeroes
// 139. word break
// 494. target sum