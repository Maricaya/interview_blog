// 350. intersection of two arrays
// 求两个数组的交集
// nums1 = [1, 2, 2, 1] nums2 = [2, 2]
// 结果为 [2, 2] 顺序可以是任意的
function intersection (nums1, nums2) {
    const record = new Map()
    // O(n)
    for (let i = 0; i < nums1.length; i++) {
        if (record[nums1[i]] > 0) {
            record[nums1[i]] ++
        } else {
            record[nums1[i]] =  1
        }
    }
    const result = []
    // O(n)
    for (let i = 0; i < nums2.length; i++) {
        if (record[nums2[i]] > 0) {
            result.push(nums2[i])
            record[nums2[i]] --
        }
    }
    return result;
}
intersection([1, 2, 2, 1], [2, 2])

// 如果数组有序呢？