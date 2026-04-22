class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        return nums.map(ele=> ele**2).sort((a,b)=>a-b)
    }
}
