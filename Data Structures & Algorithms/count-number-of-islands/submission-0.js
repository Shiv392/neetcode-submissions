class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let n=grid.length,m=grid[0].length;
        let cnt=0;
        const BFS=(row,col)=>{
            if(row<0 || row>=n || col<0 || col>=m || grid[row][col]=='0'){
                return;
            }
            grid[row][col]='0';
            BFS(row+1,col);
            BFS(row-1,col);
            BFS(row,col-1);
            BFS(row,col+1);
        }
        for(let row=0;row<n;row++){
            for(let col=0;col<m;col++){
                if(grid[row][col]=='1'){
                    cnt++;
                    BFS(row,col);
                }
            }
        }
        return cnt;
    }
}
