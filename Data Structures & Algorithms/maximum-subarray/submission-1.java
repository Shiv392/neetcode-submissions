class Solution {
    public int maxSubArray(int[] nums) {
        int n=nums.length;
        if(n==1) return nums[0];
        int maxsum=nums[0],currsum=nums[0];
        for(int i=1;i<n;i++){
            currsum=currsum+nums[i];
            currsum=Math.max(currsum,nums[i]);
            maxsum=Math.max(maxsum,currsum);
        }
        return maxsum;
    }
}
