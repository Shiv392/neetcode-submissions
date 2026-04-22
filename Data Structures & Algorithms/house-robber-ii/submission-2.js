class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let n=nums.length;
 // Handle edge cases
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    // Helper function to calculate the max amount robbed from a linear row of houses
    const houseRob = (houses) => {
        const len = houses.length;
        if (len === 0) return 0;
        if (len === 1) return houses[0];

        const dp = new Array(len).fill(0);
        dp[0] = houses[0];
        dp[1] = Math.max(houses[0], houses[1]);

        for (let i = 2; i < len; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
        }

        return dp[len - 1];
    };

    // Max of robbing either excluding the first or the last house
    return Math.max(houseRob(nums.slice(0, -1)), houseRob(nums.slice(1)));
    }
}
