// BFS 和 图的最短路径
// 算法与数据结构中讲解了代码本身
// 279. perfect squares
/* 
    对这个问题进行建模，转化成一个图论的问题
    从 n 到 0，每个数字表示一个节点。
    如果两个数字 x到y相差一个完全平方数，
    则连接一条边。
    我们得到了一个无权图。
    原问题转化成，求这个无权图中从 n 到 0 的最短路径。
*/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const queue = []
    const visited = new Array(n+1).fill(false)
    visited[n] = true
    queue.push([n, 0])
    while(queue.length > 0) {
        const [num, step] = queue.shift();
        if (num === 0) {
            return step;
        }
        for (let i = 0; num - i*i >= 0; i++) {
            if (!visited[num-i*i]) {
                queue.push([num-i*i, step + 1])
                visited[num-i*i] = true         
            }
        }
    }
};
// 练习题： 127. word ladder
// 126. word ladder || 