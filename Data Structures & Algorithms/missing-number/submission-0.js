class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n=nums.length;
        let sum=Math.floor(n*(n+1)/2);
        for(let i=0;i<n;i++){
            sum-=nums[i]
        }
        return sum;
    }
}
