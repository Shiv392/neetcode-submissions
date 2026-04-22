class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let m=grid.length, n=grid[0].length;
        let cnt=0;
        for(let row=0; row<m; row++){
            for(let col=0; col<n; col++){
                if(grid[row][col]==1){
                    cnt+=4;
                    if(row>0 && grid[row-1][col]==1) cnt-=2;
                    if(col>0 && grid[row][col-1]==1) cnt-=2;
                }
            }
        }
        return cnt;
    }
}
