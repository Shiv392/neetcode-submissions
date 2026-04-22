class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        //here the trick is if we get any O in the edge so we cant make
        //any O to X connected to edge O
        //so find the edge O mark as T, then find their connected O mark as T 
        //finnaly converrt all remaiing(closed) O to X and T to O.
        let m=board.length, n=board[0].length;
        let directions = [[-1,0],[1,0],[0,-1],[0,1]];
        const dfs = (row, col)=>{
            if(row<0 || col<0 || row>=m || col>=n || board[row][col]=='X' || board[row][col]=='T') return;
            board[row][col]='T';
           
           for(let [dx, dy] of directions){
            const new_row = dx+row, new_col = dy+col;
            dfs(new_row, new_col);
           }

        }
        for(let row=0; row<m; row++){
            for(let col=0; col<n; col++){
                if(board[row][col]=='O' && (row==0 || col==0 || row==m-1 || col==n-1)){
                    dfs(row, col);
                }
            }
        }
        for(let row=0; row<m; row++){
            for(let col=0; col<n; col++){
                if(board[row][col]=='O') board[row][col]='X';
                else if(board[row][col]=='T') board[row][col]='O'
            }
        }
        return board;
    }
}
