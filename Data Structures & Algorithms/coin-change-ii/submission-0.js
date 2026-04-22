class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp=Array.from({length:amount+1}).fill(0);
        dp[0]=1;
        for(let coin of coins){
            for(let j=coin;j<=amount;j++){
                dp[j]+=dp[j-coin];
            }
        }
        return dp[amount];
    }
}
