// floodfill 算法，一类经典问题
// 200. number of islands


var numIslands = function(grid) {
    let result = 0;
    const direction = [[0,1], [1,0], [0,-1], [-1,0]];
    const m = grid.length;
    if (m === 0) {
        return result;
    }
    const n = grid[0].length;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
    const inArea = (x, y) => x>=0 && x<m && y>= 0 && y<n;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                dfs(i, j)
                result++;
            }        
        }
    }
    // 从 gird[x][y]的位置开始，进行floodfill
    // 保证(x,y)合法，且grid[x][y]是没有被访问过的陆地
    function dfs(x, y) {
        visited[x][y] = true
        for (let i = 0; i < 4; i++) {
            let newX = x + direction[i][0]
            let newY = y + direction[i][1]
            if(inArea(newX, newY) && !visited[newX][newY] && grid[newX][newY] === '1') {
                dfs(newX, newY)
            }
        }
    }
    return result;
};


const grid = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
]
console.log(numIslands(grid))

// 130. surrounded regions
// 417. pacific atlantic water flow