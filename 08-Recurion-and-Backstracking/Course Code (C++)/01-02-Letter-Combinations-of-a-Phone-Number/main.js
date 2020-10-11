// 递归与回溯
// 树形问题
// 17. letter combinations of a phone number
var letterCombinations = function(digits) {
    const result = [];
    if (digits === '') {
        return result
    }
    // path 中保存了此时从 digits[0...index-1] 翻译得到的一个字母字符串
    // 寻找和 digits[index] 匹配的字母，得到 digits[0...index] 翻译得到的解
    findCombination(0, '')
    function findCombination(index, path) {
        if (index === digits.length) {
            result.push(path)
            return;
        }
        const map = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
        const current = digits[index]
        const letters = map[current]
        for (let i = 0; i < letters.length; i++) {
            findCombination(index+1, path+letters[i])
        }
    }
    return result;
 }; 
//  93. restore IP addresses
// 131. palindrome partitioning

