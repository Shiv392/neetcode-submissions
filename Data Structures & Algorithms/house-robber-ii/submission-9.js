class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
    let n=nums.length;
    if(n==0) return 0;
    if(n==1) return nums[0];
    const houseRob=(house)=>{
        let len=house.length;
        if(len==0) return 0;
        if(len==1) return house[0];
        let dp=new Array(len).fill(0);
        dp[0]=house[0],dp[1]=Math.max(house[0],house[1]);
        for(let i=2;i<len;i++){
            dp[i]=Math.max(dp[i-1],dp[i-2]+house[i]);
        }
        return dp[len-1];
    }
    return Math.max(houseRob(nums.slice(0,-1)),houseRob(nums.slice(1)));
    }
}

