// 198. house robber
/**
 * @param {number[]} nums
 * @return {number}
 */
// 状态：
// 考虑偷取 [index...n-1] 范围里的房子（函数的定义)
// 状态转移方程：
// f(0) = max{v(0)+f(2), v(1)+f(3), ...,
// v(n-3)+f(n-1),v(n-2),v(n-1) }
function tryRob(nums, index, memo) {
    if (index >= nums.length) {
        return 0
    }
    if (memo[index] !== -1) {
        return memo[index]
    }
    let res = 0;
    for (let i = index; i < nums.length; i++) {
        res = Math.max(res, nums[i] + tryRob(nums, i+2, memo))
    }
    memo[index] = res
    return res
}
var rob = function(nums) {
    const memo = new Array(nums.length).fill(-1)
    return tryRob(nums, 0, memo)
};

// 方法2: 自底向上
function rob2 (nums) {
    const n = nums.length
    if (n === 0) {
        return 0
    }
    // memo[i] 表示 [i...n-1]所能获取的最大收益
    const memo = new Array(n).fill(-1)
    memo[n-1] = nums[n-1]
    for (let i = n-2; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            memo[i] = Math.max(memo[i], nums[j]+(j+2 < n ? memo[j+2] : 0))
        }
    }
    return memo[0]
}
// 213. house robber ||
// 337. house robber |||
// 309. best time to buy and sell stock with cooldown
// 