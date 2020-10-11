// 动态规划
function main (n) {
    let memo = new Array(n+1).fill(-1)
    const result = fibonacci(n)
    function fibonacci(n) {
        if (n===0){
            return 0
        }
        if (n===1){
            return 1
        }
        if (memo[n] === -1) {
            memo[n] = fibonacci(n-1) + fibonacci(n-2)
        }
        return memo[n]
    }
    return result    
}
// 自下而上地解决问题
function fib(n) {
    let memo = new Array(n+1).fill(-1)
    memo[0] = 0
    memo[1] = 1
    for (let i = 0; i <= n; i++) {
        memo[i] = memo[i-1] + memo[i-2]      
    }
    return memo[n]
}
