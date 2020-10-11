// 220. contains duplicate |||
// [l+1...l+k] 寻找大于等于 fab(v-x) <= t 的元素
// x-t <= v <= x+t

function containsNearbyAlmostDuplicate(nums, k ,t) {
    const record = new Set();
    for (let i = 0; i < nums.length; i++) {
        // 寻找 nums[i] - t 的最小值 <= nums[i]
        if([...record].sort()[0] && [...record].sort()[0] - t <= nums[i]+t) {
            return true
        }
        record.add(nums[i])

        // 保证 record 中最多有 k 个元素
        if (record.size === k+1) {
            record.delete(nums[i-k])
        }
    }
    return false
}