class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let m=grid.length, n=grid[0].length;
        let max_area = 0;
        const get_area = (row, col)=>{
            if(row<0 || col<0 || row>=m || col>=n || grid[row][col]==0){
                return 0;
            }

            let area = 1;
            grid[row][col]=0;
            let directions = [[0,1],[0,-1],[-1,0],[1,0]];
            for(let [x,y] of directions){
                const new_row = x+row;
                const new_col = y+col;
                area += get_area(new_row, new_col);
            }
            return area;
        }
        for(let row=0; row<m; row++){
            for(let col=0; col<n; col++){
                if(grid[row][col]){
                    const area = get_area(row, col);
                    max_area = Math.max(max_area, area);
                }
            }
        }
        return max_area;
    }
}
