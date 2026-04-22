class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numEnclaves(grid) {
        let m=grid.length, n=grid[0].length;
        let directions = [[-1,0],[1,0],[0,-1],[0,1]];
        const dfs = (row, col)=>{
            if(row<0 || col<0 || row>=m || col>=n || grid[row][col]==0) return;
            grid[row][col]=0;
            for(let [dx, dy] of directions){
                const new_row = dx+row;
                const new_col = dy+col;
                dfs(new_row, new_col);
            }
        }

        //making the first and last row zero also their connected 1 to 0
        for(let col=0; col<n; col++){
            dfs(0, col);
            dfs(m-1, col);
        }
        //making the first column and last column also their connected 1 to 0
        for(let row=0; row<m; row++){
            dfs(row, 0);
            dfs(row, n-1);
        }

        //now after mapping count
        let cnt=0;
        for(let row=0; row<m; row++){
            for(let col=0; col<n; col++){
                if(grid[row][col]==1) cnt++;
            }
        }
        return cnt;
    }
}
