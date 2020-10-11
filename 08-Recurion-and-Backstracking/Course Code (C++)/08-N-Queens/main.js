// 回溯法是经典的人工智能基础
// 51. N-Queens
var solveNQueens = function(n) {
    const result = []
    const col = new Array(n).fill(false)
    const dia1 = new Array(2*n - 1).fill(false)
    const dia2 = new Array(2*n - 1).fill(false)
    putQueen(0, []);
    // 尝试在一个n皇后问题中，尝试摆放第index行的皇后位置
    function putQueen(index, row) {
        if(index === n) {
            result.push(generateBoard(Array.from(row)))
            return
        }
        for (let i = 0; i < n; i++) {
            // 尝试将第index行的皇后摆放在第i列
            if (!col[i] && !dia1[index+i] && !dia2[index-i+n-1]) {
                row.push(i);
                col[i] = true
                dia1[index+i] = true
                dia2[index-i+n-1] = true
                putQueen(index+1, row)
                col[i] = false
                dia1[index+i] = false
                dia2[index-i+n-1] = false
                row.pop()
            }
        }
    }
    function generateBoard(row) {
        console.log('row', row)
        const board = new Array(n).fill('.').map(() => new Array(n).fill('.'))
        for (let i = 0; i < n; i++) {
            board[i][row[i]] = 'Q'
            board[i] = board[i].join('')        
        }
        return board
    }
    return result
};

console.log(solveNQueens(4))

// 52. N-Queen ||
// 37. sudoku solver
