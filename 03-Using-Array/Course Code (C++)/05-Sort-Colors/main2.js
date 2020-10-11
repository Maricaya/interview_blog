// 75 sort colors
// 三路快排
function swap (arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]]
}
function sortColors(nums) {
    let zero = -1; // [0 ...zero] === 0
    let two = nums.length; // [two...n-z] === 2
    for (let i = 0; i < two;) {
        if (nums[i] === 1) {
            i++
        }
        else if (nums[i] === 2) {
            two--;
            swap(nums, i, two)
        }
        else {
            zero++
            swap(nums, zero, i)
            i++
        }
    }
}

// 88 merge sorted array
// 215 kth largest element in an array