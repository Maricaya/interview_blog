// 167 two sum || 
// input array is sorted
// 有序？二分搜索？
// nums[i], 再寻找 target- nums[i]

// 方法2: 对撞指针
// 两个索引，从左开始 i，从右开始 j
// num[i] + nums[j] < target
// i++
// num[i] + nums[j] > target
// j--
function twoSum(numbers, target) {
  let l = 0, r = numbers.length - 1
  while(l < r) {
    if (numbers[l] + numbers[r] === target) {
       return [l+1, r+1];
    }
    else if (numbers[l] + numbers[r] < target) {
        l++;
    }
    else {
        r--
    }
  }
}

const arr = [2, 4, 7, 98, 99]
console.log(twoSum(arr, 100))
// 对撞指针
// 125 valid palindrome
// 空字符串？字符的定义？大小写的问题？
// 344 reverse string
// 返回字符串的倒序字符串
// 11 container with most water
