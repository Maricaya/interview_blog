// 没有重复字母的最长子串
// 滑动窗口
function lengthOfLongestSubstring(s) {
    let freq = new Array(256).fill(0);
    // let freq = new Map() 
    let l = 0, r = -1; //滑动窗口为 s[l...r]
    let res = 0;
    while(l<s.length) {
        if (r+1 < s.length && freq[s[r+1].charCodeAt()] === 0) {
            r ++;
            freq[s[r].charCodeAt()] ++
        }
        else {
            freq[s[l].charCodeAt()] --
            l++
        }
        res = Math.max(res, r-l+1)
    }
    return res;
}

const nums = 'aaabcbbbcc'
console.log(lengthOfLongestSubstring(nums))

// 练习题
// 438
// 76 