// 77. combinations 组合问题
function combinations(n, k) {
    const result = []
    if ( n<=0 || k<=0 || k>n) {
        return result
    }
    generateCombinations(n, k, 1, [], result)
    return result;
}

// 求解C(n,k)，当前已经找到的组合存储在path中，需要从start开始搜索新的元素
function generateCombinations(n, k, start, path, result) {
    if (path.length === k) {
        result.push(Array.from(path))
        return;
    }
    // for (let i = start; i <= n; i++) {
    // 还有 k - path.length 个位置
    // 所以，[i...n] 中至少有 k-path.length 个元素
    // 所以，i 最多为 n - (k-path.length) + 1
    for (let i = start; i <= n - (k-path.length) + 1; i++) {
        path.push(i)
        generateCombinations(n, k, i+1, path, result)
        path.pop()
    }
}

console.log(combinations(4, 2))

// 练习题
// 39. combination sum (**)
// 40. combination sum || (*)
// 216. combination sum |||
// 78. subsets (**)
// 90. subsets || (*)