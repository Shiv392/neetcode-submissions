class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let m=board.length, n=board[0].length;
        let ans=false;
        let used=Array.from({length :m},()=> new Array(n).fill(false));
        const dfs = (row, col, index)=>{
        if(row<0 || col<0 || row>=m || col>=n || used[row][col]){
            return;
        }
        if(word[index]!=board[row][col]) return false;

        if(index == word.length-1) return true;

        used[row][col]=true;
        const up = dfs(row-1, col, index+1);
        const down = dfs(row+1, col, index+1);
        const left = dfs(row, col-1, index+1);
        const right = dfs(row, col+1, index+1);

        if(up || down || left || right){
            return true;
        }

        used[row][col]=false;
        return false;
        }
        for(let row=0; row<m; row++){
            for(let col=0; col<n; col++){
                if(word[0]==board[row][col]){
                    if(dfs(row, col, 0)){
                        ans=true;
                        break;
                    }
                }
            }
        }
        return ans;
    }
}
