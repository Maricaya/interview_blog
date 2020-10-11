// 70.climbing stairs
var climbStairs = function(n) {
    const memo = new Array(n+1).fill(-1)
    function calcWays(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        if (memo[n] === -1) {
            memo[n] = calcWays(n-1) + calcWays(n-2);
        }
        return memo[n]
    }
    return calcWays(n);
};

var climbStairs1 = function(n) {
    const memo = new Array(n+1).fill(-1)
    memo[0] = 1
    memo[1] = 1
    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i-1] + memo[i-2]
        console.log(i, memo)
    }
    return memo[n];
};
console.log(climbStairs1(3))
// 练习题： 
// 120. triangle
// 64. minimum path sum
