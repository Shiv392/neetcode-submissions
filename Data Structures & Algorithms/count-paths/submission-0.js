class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp=Array.from({length:m},()=> Array.from({length:n}).fill(0));
        for(let i=0;i<m;i++){
            dp[i][0]=1;
        }
        for(let i=0;i<n;i++){
            dp[0][i]=1;
        }
        for(let row=1;row<m;row++){
            for(let col=1;col<n;col++){
                dp[row][col]=dp[row-1][col]+dp[row][col-1];
            }
        }
        return dp[m-1][n-1];
    }
}
