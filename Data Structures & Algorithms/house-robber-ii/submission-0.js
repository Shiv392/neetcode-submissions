class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let n=nums.length;
        if(n==0) return 0;
        if(n==1) return nums[0];
        const robs=(nums)=>{
            let n=nums.length,dp=new Array(n+1).fill(0);
            dp[0]=0,dp[1]=nums[0];
            for(let i=2;i<=n;i++){
                let nextrob=dp[i-2]+nums[i-1];
                dp[i]=Math.max(dp[i-1],nextrob);
            }
            return dp[n];
        }
        return Math.max(robs(nums.slice(0,-1)),robs(nums.slice(1)));
    }
}
