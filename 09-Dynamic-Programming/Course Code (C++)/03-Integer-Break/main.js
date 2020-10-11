// 343. integer break
// 最优子结构
var integerBreak = function(n) {
    let memo = new Array(n+1).fill(-1)
    // 将 n 进行分割（至少分割两部分），可以获得的最大乘积
    function breakInteger(n) {
        if(n === 1) {
            return 1;
        }
        if (memo[n] !== -1) {
            return memo[n]
        }
        let result = -1
        for (let i = 0; i <= n-1; i++) {
            //  i+(n-i)
            memo[n] = Math.max(result, i*(n-i), i*breakInteger(n-i))
        }
        return memo[n]
    }
    return breakInteger(n);
};

function integer(n) {
    const memo = new Array(n+1).fill(-1);
    memo[1] = 1;
    for (let i = 2; i <= n; i++) {
        // memo[i] = Math.max()
        for (let j = 0; j < array.length; j++) {
            // j + (i-j)
            memo[i] = Math.max(memo[i], j*(i-j), j*memo[i-j])
        }
    }
    return memo[n]
}

// 279. perfect squares
// 91. decode ways
// 62. unique paths
// 63. unique paths ||