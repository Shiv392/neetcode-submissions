class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let n=grid.length,m=grid[0].length;
        let maxarea=0;
        const BFS=(row,col)=>{
            if(row<0 || row>=n || col<0 || col>=m || grid[row][col]==0){
                return 0;
            }
            let area=1;
            grid[row][col]=0;
            area+=BFS(row-1,col);
            area+=BFS(row+1,col);
            area+=BFS(row,col-1);
            area+=BFS(row,col+1);
            return area;
        }
        for(let row=0;row<n;row++){
            for(let col=0;col<m;col++){
                const area=BFS(row,col);
                maxarea=Math.max(maxarea,area);
            }
        }
        return maxarea;
    }
}
