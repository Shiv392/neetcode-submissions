class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let m=grid.length, n=grid[0].length;
        let cnt=0;
        const bfs = (row, col)=>{
            if(row<0 || col<0 || row>=m || col>=n || grid[row][col]=='0'){
                return;
            }

            grid[row][col]='0';
            let directions = [[-1,0],[1,0],[0,-1],[0,1]];
            for(let [x,y] of directions){
                const new_row = row+x;
                const new_col = col+y;

                bfs(new_row, new_col);
            }
        }
        for(let row=0; row<m; row++){
            for(let col=0; col<n; col++){
                if(grid[row][col]=='1'){
                    bfs(row, col);
                    cnt++;
                }
            }
        }
        return cnt;
    }
}
