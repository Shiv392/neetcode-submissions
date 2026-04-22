class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let m=grid.length, n=grid[0].length;
        let queue=[], fresh_cnt=0;
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(grid[i][j]==2) queue.push([i,j]);
                else if(grid[i][j]==1) fresh_cnt++;
            }
        }
        if(!fresh_cnt) return 0;
        let min_time=0, directions=[[-1,0],[1,0],[0,-1],[0,1]];
        while(queue.length){
            let length=queue.length, is_rotten=false;
            for(let i=0;i<length;i++){
                const [row,col] = queue.shift();
                for(let [dx,dy] of directions){
                    const new_row = dx+row;
                    const new_col = dy+col;
                    if(new_row>=0 && new_row<m && new_col>=0 && new_col<n && grid[new_row][new_col]==1){
                        grid[new_row][new_col]=2;
                        fresh_cnt--;
                        is_rotten = true;
                        queue.push([new_row, new_col]);
                    }
                }
            }
            is_rotten && min_time++;
        }
        return fresh_cnt==0 ? min_time : -1;
    }
}
