class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        //solution 1
        let n=prices.length,minbuy=prices[0],maxprofit=0;
        for(let i=1;i<n;i++){
            minbuy=Math.min(minbuy,prices[i]);
            maxprofit=Math.max(maxprofit,Math.abs(minbuy-prices[i]));
        }
        return maxprofit;

        // let n=prices.length;
        // let minvalue=new Array(n).fill(0),maxvalue=new Array(n).fill(0);
        // minvalue[0]=prices[0],maxvalue[n-1]=prices[n-1];
        // for(let i=1;i<n;i++){
        //     minvalue[i]=Math.min(minvalue[i-1],prices[i]);
        // }
        // for(let i=n-2;i>=0;i--){
        //     maxvalue[i]=Math.max(prices[i],maxvalue[i+1]);
        // }
        // let maxprofit=0;
        // for(let i=0;i<n;i++){
        //     maxprofit=Math.max(maxprofit,Math.abs(maxvalue[i]-minvalue[i]));
        // }
        // return maxprofit;
    }
}
