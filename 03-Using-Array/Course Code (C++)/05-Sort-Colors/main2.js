// 75 sort colors
// 三路快排
function swap (arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]]
}
// [000    0 111 (这里不确定)... 2   22]
// 0=zero    i<=              two=nums.length-1
function sortColors(nums) {
    let zero = 0, two = nums.length - 1
    for(let i = 0; i <= two;) {
        if (nums[i] === 1) {
            i++
        } else if (nums[i] === 2) {
            swap(nums, i, two)
            two--
        } else {
            swap(nums, i, zero)
            zero++
            i++
        }
    }
}
// 88 merge sorted array
// nums1 nums2
//  i      j
//      <      i++
//      >     nums2[j] 插入左侧，第 i 位
// j<n num2 有剩余数组 num2.slice(j)
const merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n)
    let i = 0, j = 0
    while (i<nums1.length && j<nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++
        } else {
            nums1.splice(i, 0, nums2[j])
            j++
        }
    }
    if (j<n) {
        nums1.push(...nums2.slice(j))
    }
    console.log(nums1)
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
merge([0], 0, [1], 1)
merge([2, 0], 1, [1], 1)
merge([4], 1, [1,2,3,5,6], 5)
// 215 kth largest element in an array
// https://github.com/sisterAn/JavaScript-Algorithms/issues/60
// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/javascriptsi-chong-fang-shi-jie-topkwen-ti-by-user/
