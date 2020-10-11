// 一个使用查找表的经典问题
// 1. two sum
// 放入查找表，将所有元素放入查找表，之后对于每一个元素a，
// 查找 target - a 是否存在
function twoSum(nums, target) {
    const record = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (record[complement] >= 0) {
            return [i, record[complement]]
        }
        record[nums[i]] = i
    }
    console.log(record)
}

console.log(twoSum([2, 7, 11, 15], 9))

// 练习题 15. 3sum
// 18. 4sum
// 16. 3sum closest