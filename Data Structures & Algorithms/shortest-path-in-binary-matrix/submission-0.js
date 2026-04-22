class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
if(grid[0][0]==1) return -1;
let m=grid.length, n=grid[0].length;
let min_path = Infinity, queue=[[0,0,1]];
let directions = [[-1,0], [1,0], [0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]];
let visited=Array.from({length : m}, ()=> new Array(n).fill(false));
while(queue.length>0){
const [row, col, node_cnt] = queue.shift();
if(row == m-1 && col==n-1){
    return node_cnt;
}

visited[row][col]=true;
for(let [dx, dy] of directions){
    const new_row = dx+row;
    const new_col = dy+col;
    if(new_row>=0 && new_row<m && new_col>=0 && new_col<n && grid[new_row][new_col]==0 && 
    !visited[new_row][new_col]
    ){
        queue.push([new_row, new_col, node_cnt+1]);
        visited[new_row][new_col]=true;
    }
}
}
return -1;
    }
}
