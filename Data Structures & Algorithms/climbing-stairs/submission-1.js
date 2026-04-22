class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        //using recursion
        // if(n==1 || n==2) return n;
        // return this.climbStairs(n-1)+this.climbStairs(n-2);

        //using dp
        if(n==1 || n==2) return n;
        let dp=new Array(n).fill(0);
        dp[0]=1,dp[1]=2;
        for(let i=2;i<n;i++){
            dp[i]=dp[i-1]+dp[i-2];
        }
        return dp[n-1];
    }
}
