// 最长公共子序列 LCS
// LCS(m, n)
// S1[0...m] S2[0...n] 的最长公共子序列的长度
// s1[m] === s2[n]: LCS(m,n) = 1+LCS(m-1,n-1)
// s1[m] !== s2[n]: max(LCS(m-1,n), LCS(m,n-1))
function LCS(s1, s2) {
    const memo = new Array(s1.length).fill(0)
    .map(() => new Array(s1.length).fill(0))
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                memo[m][n] = 1+LCS(m-1,n-1)
            }
        }        
    }
}

// dijkstra 
// 单源最短路径算法也是动态规划
// shortestPath(i) 为从 start 到 i 的最短路径长度
// shortestPath(x) = min(shortestPath(a) + w(a -> x))