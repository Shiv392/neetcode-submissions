class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //brute force approach to finding all posibilities
        let length=prices.length, max_profit=0;
        for(let i=0;i<length-1;i++){
            for(let j=i+1;j<length;j++){
                max_profit = Math.max(max_profit, prices[j]-prices[i]);
            }
        }
        return max_profit;
    }
}
