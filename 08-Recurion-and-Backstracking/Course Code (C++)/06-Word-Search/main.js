// 二维平面上使用 回溯法
// 79. word search
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 从 board[startX][startY] 开始
// 寻找 word[index...word.length]


var exist = function(board, word) { 
    const visited = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(false))
    const m = board.length
    const n = board[0].length
    function inArea(x, y) {
        return x>=0 && x<m && y>=0 && y<n;
    }
    function searchWord (index, startX, startY) {
        const d = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        // 寻找 word 结束
        if (index === word.length - 1) {
            return board[startX][startY] === word[index]
        }
        if (board[startX][startY] === word[index]) {
            visited[startX][startY] = true
            // 从 startX,startY 出发，从四个方向寻找
            for (let i = 0; i < 4; i++) {
                let newX = startX + d[i][0]            
                let newY = startY + d[i][1]            
                if (inArea(newX, newY) && !visited[newX][newY] && searchWord(index+1, newX, newY)) {
                    return true;
                }
            }
            visited[startX][startY] = false;
        }
        return false;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (searchWord(0, i, j,)) {
                return true
            }
        }        
    }
    return false;
};
const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word = "ABCB"
console.log(exist(board, word))