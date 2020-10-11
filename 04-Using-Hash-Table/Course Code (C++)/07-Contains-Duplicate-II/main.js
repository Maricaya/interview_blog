// 219 contains duplicate ||
// nums k
// 是否存在 i j，使 nums[i] === nums[j]
// 且 i 和j之间的差不超过k

// 这个问题就变成了，我能不能找到一个 k+1 的区间，
// 区间内有两个元素相等
function contaionsNearbyDuplicate(nums, k) {
    const record = new Set();
    for (let i = 0; i < nums.length; i++) {
        if(record.has(nums[i])) {
            return true
        }
        record.add(nums[i])
        // 保持 record 中最多有 k 个元素
        if (record.size === k+1) {
            // 当 i = k 时，i-k=0
            // 此时滑动窗口是从 [0...k]
            // 删除最左边的元素
            record.delete(nums[i-k])
        }
    }
    return false
}
// 217. contaions duplicate