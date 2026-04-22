class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        prices.sort((a,b)=>a-b);
        let sum = prices[0]+prices[1];
        let left_over = money-sum;
        return left_over>=0 ? left_over : money;
    }
}
