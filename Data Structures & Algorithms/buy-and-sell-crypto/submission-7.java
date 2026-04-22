class Solution {
    public int maxProfit(int[] prices) {
        //using prefix sum algorithm 
        //time complexity --> O(n) space complexity ---> O(n);
        // int length=prices.length;
        // int []leftmin_arr = new int[length];
        // int []rightmax_arr = new int[length];
        // leftmin_arr[0]=prices[0];
        // rightmax_arr[length-1]=prices[length-1];

        // //get the min price from the left side
        // for(int i=1;i<length;i++){
        //     leftmin_arr[i] = Math.min(prices[i], leftmin_arr[i-1]);
        // }
        // //get the max price from the right side
        // for(int i=length-2;i>=0;i--){
        //     rightmax_arr[i] = Math.max(prices[i], rightmax_arr[i+1]);
        // }

        // int max_profit=0;
        // for(int i=0;i<length;i++){
        //     max_profit = Math.max(max_profit, Math.abs(leftmin_arr[i]-rightmax_arr[i]));
        // }
        // return max_profit;

        //O(1) space solution using two pointer
        int length=prices.length, max_profit=0;
        int min_price = prices[0];
        for(int i=1;i<length;i++){
            min_price = Math.min(min_price, prices[i]);
            max_profit = Math.max(max_profit, Math.abs(prices[i]-min_price));
        }
        return max_profit;
    }
}
