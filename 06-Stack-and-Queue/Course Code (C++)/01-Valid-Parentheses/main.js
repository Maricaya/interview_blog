// 20. valid parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
// 使用 stack 遍历字符串
// 栈顶元素反应了在嵌套的层次关系中
// 最近的需要匹配的元素
var isValid = function(s) {
    let stack = [];
    const left = ['(', '{', '[']
    const right = [')', '}', ']']
    for (let i = 0; i < s.length; i++) {
        if (left.indexOf(s[i]) > -1) {
            stack.push(s[i])
        } else {
            if (stack.length === 0) {
                return false
            }
            const firstChar = stack.pop()
            // match
            const isMatch = right.indexOf(s[i]) === left.indexOf(firstChar)
            if (!isMatch) {
                return false
            }
        }
    }
    return stack.length === 0
};
// 150. evaluate reverse polish notation
// 逆波兰表达式
// 71. simplify path