// 滑动窗口
// 209 minimum size subarray sum
// 连续子数组
function minSubArrayLen (nums, target) {
    let l = 0, r = -1; // nums[l...r] 为我们的滑动窗口
    let sum = 0;
    let res = nums.length + 1;

    while(l < nums.length) {
        // 处理边界条件
        if (r + 1 < nums.length && sum < target) {
            r ++
            sum += nums[r]
        }
        else  {
            sum -= nums[l]
            l++
        }
        if(sum>= s) {
            res = min(res, r-l+1)
        }
    }
    if (res === nums.length +1) {
        return 0
    }
    return res
}