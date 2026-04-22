class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numEnclaves(grid) {
        let m=grid.length, n=grid[0].length;
        let directions = [[-1,0],[1,0],[0,1],[0,-1]];
        const dfs = (row, col)=>{
            if(row<0 || col<0 || row>=m || col>=n || grid[row][col]==0) return;

            grid[row][col]=0;
            for(let [x,y] of directions){
                const new_row = x+row, new_col = y+col;
                dfs(new_row, new_col);
            }
        }
        //make  col boundary and their connected zero
        for(let row=0; row<m; row++){
            dfs(row, 0);
            dfs(row, n-1);
        }
        //make row boundary and theirr connected zero
        for(let col=0; col<n; col++){
            dfs(0, col);
            dfs(m-1, col);
        }

        //now count non connected sea
        let cnt=0;
        for(let row=0; row<m; row++){
            for(let col=0; col<n; col++){
                if(grid[row][col]) cnt++;
            }
        }
        return cnt;
    }
}
