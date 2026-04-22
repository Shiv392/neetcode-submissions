class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let n=s.length;
        const dp=new Array(n+1).fill(0);
        dp[n]=1;
        for(let i=n-1;i>=0;i--){
            if(s[i]=='0') continue;
            dp[i]=dp[i+1];
            if(s[i]+s[i+1]<=26) dp[i]+=dp[i+2];
        }
        return dp[0];
    }
}
