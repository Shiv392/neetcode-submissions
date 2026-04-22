class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //brute force approach to finding all posibilities
        // let length=prices.length, max_profit=0;
        // for(let i=0;i<length-1;i++){
        //     for(let j=i+1;j<length;j++){
        //         max_profit = Math.max(max_profit, prices[j]-prices[i]);
        //     }
        // }
        // return max_profit;

        //here for every price we have to count their min and max prices 
        //so that we can compare
        let length=prices.length, left_minprice=new Array(length).fill(1);
        let right_maxprice=new Array(length).fill(1);
        left_minprice[0]=prices[0], right_maxprice[length-1]=prices[length-1];
        for(let i=1;i<length;i++){
            left_minprice[i] = Math.min(left_minprice[i-1], prices[i]);
        }
        for(let i=length-2;i>=0;i--){
            right_maxprice[i] = Math.max(prices[i], right_maxprice[i+1]);
        }
        let max_profit=0;
        for(let i=0;i<length;i++){
            max_profit=Math.max(max_profit, right_maxprice[i]-left_minprice[i]);
        }
        return max_profit;
    }
}
