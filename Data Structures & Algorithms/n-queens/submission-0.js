class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let grid=Array.from({length:n},()=> new Array(n).fill('.'));
        let ans=[];
        const isValidQueen=(row,col)=>{
            for(let i=0;i<row;i++){
                if(grid[i][col]=='Q') return false;
            }
            for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
                if(grid[i][j]=='Q') return false;
            }
            for(let i=row-1,j=col+1;i>=0&&j<=n-1;i--,j++){
                if(grid[i][j]=='Q') return false;
            }
            return true;
        }
        const dfs=(row)=>{
            if(row==n){
                ans.push([...grid].map(ele=> ele.join('')));
                return;
            }
            for(let col=0;col<n;col++){
                if(isValidQueen(row,col)){
                    grid[row][col]='Q';
                    dfs(row+1);
                    grid[row][col]='.'
                }
            }
        }
        dfs(0);
        return ans;
    }
}
