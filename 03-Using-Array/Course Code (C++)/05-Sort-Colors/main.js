// 基础算法思路的应用
// 75. sort colors
// n个元素的数组，只有 0,1,2 排序

function sortColor (nums) {
    // 存放0，1，2三个元素的频率
    let count = new Array(3).fill(0)
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++
    }
    let index = 0;
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < count[j]; i++) {
            nums[index++] = j
        }            
    }

    console.log(count)
}

const nums = [1,1,0,0,2,2]
sortColor(nums)