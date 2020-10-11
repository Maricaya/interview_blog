// 0-1 背包问题
// F(n, C) 考虑将n个物品放进容量为C的背包，使得价值最大
/* F(i,c) = max(
             F(i-1,c),              不放
             v(i)+F(i-1,c-w(i)))    放
             */
function knapsack01(w, v, C) {
    const n = w.length;
    // n * c+1
    const meno = new Array(n).fill(-1).map(() => new Array(C+1).fill(-1))
    // 用[0...index]的物品，填充容积为c的背包的最大价值
    function bestValue(index, c) {
        if (index < 0 || c<=0) {
            return 0;
        }
        if (meno[index][c] !== -1) {
            return meno[index][c]
        }
        let res = bestValue(index-1,c)
    
        if (c>w[index]) {
           res = Math.max(res, v[index] + bestValue(index-1, c-w[index]))
        }
        meno[index][c] = res
        return res;
    }
    return bestValue(n-1, C)
}

// 自底向上求解

function _knapsack01 (w, v, C) {
    const n = w.length;
    if (n === 0) {
        return 0
    }
    const memo = new Array(n).fill(-1).map(() => new Array(C+1).fill(-1))
    // 基本问题
    for (let j = 0; j <= C; j++) {
        memo[0][j] = (j >= w[0] ? v[0] : 0)
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= C; j++) {
            memo[i][j] = memo[i-1][j]
            if ( j>= w[i]) {
                memo[i][j] = Math.max(memo[i][j], v[i] + memo[i-1][j-w[i]])
            }
        }
    }
    return memo[n-1][C]
}

// 优化
// F(n, C) 考虑将n个物品放进容量为C的背包，使得价值最大
/* F(i,c) = max(
             F(i-1,c),              不放
             v(i)+F(i-1,c-w(i)))    放
*/
// 第 i 行元素只依赖于第 i-1 行元素。理论上，只需要保持两行元素
// 空间复杂度: O(2*C) = O(C)
function __knapsack01 (w, v, C) {
    const n = w.length;
    if (n === 0) {
        return 0
    }
    const memo = new Array(C+1).fill(-1)
    // 基本问题
    for (let j = 0; j <= C; j++) {
        memo[j] = (j >= w[0] ? v[0] : 0)
    }
    for (let i = 1; i < n; i++) {
        for (let j = C; j >= w[i]; j--) {
            memo[j] = Math.max(memo[j], v[i] + memo[j-w])
        }
    }
    return memo[C]
}
// 01背包问题变种
// 完全背包问题：每个物品可以无限使用
// 多重背包问题：每个物品不止1个，有num个
// 多维费用的背包问题：要考虑物品的体积和重量
// 物品之间加入约束
// 