class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let n=text1.length,m=text2.length;
        const dp=Array.from({length:n+1},()=> Array.from({length:m+1}).fill(0));
        for(let i=1;i<=n;i++){
            for(let j=1;j<=m;j++){
                if(text1[i-1]==text2[j-1]){
                 dp[i][j]=dp[i-1][j-1]+1;
                }
                else{
                    dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
                }
            }
        }
        return dp[n][m];
    }
}
