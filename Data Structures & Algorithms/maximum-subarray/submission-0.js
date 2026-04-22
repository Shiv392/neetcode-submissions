class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let n=nums.length;
        if(n==1) return nums[0];
        let currsum=nums[0],maxsum=nums[0];
        for(let i=1;i<n;i++){
            currsum+=nums[i];
            currsum=Math.max(nums[i],currsum);
            maxsum=Math.max(maxsum,currsum);
        }
        return maxsum;
    }
}
