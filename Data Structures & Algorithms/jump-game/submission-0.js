class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let n=nums.length,maxReach=0;
        for(let i=0;i<n;i++){
            if(i>maxReach) return false;
            maxReach=Math.max(maxReach,nums[i]+i);
        }
        return maxReach>=n-1;
    }
}
