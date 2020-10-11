// 排列问题
// 46. permutations 全排列问题
// [1,2,3]
function permutations(nums) {
    const result = []
    const used = new Array(nums.length).fill(false)
    if (nums.length === 0) {
        return result;
    }
    generatePermutation(0, []);
    function generatePermutation(index, p) {
        if (index === nums.length) {
            result.push(Array.from(p))
            return result;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                used[i] = true;
            // if (p.indexOf(nums[i]) === -1) { 如果 nums有重复数字就不行了
                p.push(nums[i])
                generatePermutation(index+1, p)
                p.pop()
                used[i] = false;
            }
        }
    }
    return result;
}
// p 中保存了一个有 index 个元素的排列。
// 向这个排列的末尾添加第 index+1 个元素，获得一个有 index+1 个元素的排列

console.log(permutations([1,2,3]))

// 练习题：
// 47. permutations ｜｜