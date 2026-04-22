class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numDistinctIslands(grid) {
        let m=grid.length, n=grid[0].length;
        let island_set = new Set();
        let directions = [[-1,0],[1,0],[0,-1],[0,1]];
        const get_island = (row, col, row0, col0)=>{
            if(row<0 || col<0 || row>=m || col>=n || !grid[row][col]){
                return '';
            }
            let row_diff = row-row0;
            let col_diff = col-col0;
            let str = `${row_diff},${col_diff}`;
            grid[row][col]=0;
            for(let [x,y] of directions){
                const new_row = row+x;
                const new_col = col+y;
                str+= get_island(new_row, new_col, row0, col0);
            }

            return str;
        }
        for(let row=0; row<m; row++){
            for(let col=0; col<n; col++){
                if(grid[row][col]==1){
                    const island_str = get_island(row, col, row, col);
                    island_set.add(island_str);
                }
            }
        }
        return island_set.size;
    }
}
