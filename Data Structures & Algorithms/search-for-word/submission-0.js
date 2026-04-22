class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let n=board.length,m=board[0].length;
        let ans=false;
        const DFS=(row,col,index)=>{
            if(row<0 || col<0 || row>=n || col>=m || board[row][col]!=word[index]){
                return;
            }
            if(index==word.length-1){
                ans=true;
                return;
            }
            board[row][col]=null;
            DFS(row+1,col,index+1);
            DFS(row-1,col,index+1);
            DFS(row,col+1,index+1);
            DFS(row,col-1,index+1);
            board[row][col]=word[index];
        }
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(board[i][j]==word[0]){
                    DFS(i,j,0);
                    if(ans) break;
                }
            }
        }
        return ans;
    }
}
