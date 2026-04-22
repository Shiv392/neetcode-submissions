class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let m=grid.length, n=grid[0].length;
        let fresh_cnt=0, rotten_queue=[];
        for(let row=0; row<m; row++){
            for(let col=0; col<n; col++){
                if(grid[row][col]==1) fresh_cnt++;
                else if(grid[row][col]==2) rotten_queue.push([row, col]);
            }
        }

        let min_time = 0, directions = [[-1,0],[1,0],[0,-1],[0,1]];
        while(rotten_queue.length>0){
            let length=rotten_queue.length, is_rotten = false;
            for(let i=0;i<length;i++){
                const [row, col] = rotten_queue.shift();
                for(let [dx, dy] of directions){
                    const new_row = row+dx;
                    const new_col = col+dy;
                    if(new_row>=0 && new_row<m && new_col>=0 && new_col<n && grid[new_row][new_col]==1){
                        grid[new_row][new_col]=2;
                        fresh_cnt--;
                        is_rotten = true;
                        rotten_queue.push([new_row, new_col]);
                    }
                }
            }
            is_rotten && min_time ++;
        }
        return fresh_cnt<=0 ? min_time : -1;
    }
}
