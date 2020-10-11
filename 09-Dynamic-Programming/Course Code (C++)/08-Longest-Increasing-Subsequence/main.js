// 最长上升子序列
// 300. longest increasing subsequence 
// LIS(i) 表示以第 i 个数字为结尾的最长上升子序列的长度
// [0...i]范围内，选择数字nums[i]可以获得的最长上升子序列的长度
// LIS(i) = max(1+LIS(j) if (nums[i]>nums[j]))
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    const LIS = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                LIS[i] = Math.max(LIS[i], 1+LIS[j])
            }
        }
    }
    return LIS.reduce((res, cur) => Math.max(res, cur))
};

// 376. wiggle subsequence
