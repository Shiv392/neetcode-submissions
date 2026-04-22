class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        //using dp
        // let n=nums.length;
        // let dp=new Array(n).fill(1),maxlen=1;
        // for(let i=1;i<n;i++){
        //     for(let j=0;j<i;j++){
        //         if(nums[i]>nums[j]){
        //             dp[i]=Math.max(dp[i],dp[j]+1);
        //             maxlen=Math.max(maxlen,dp[i]);
        //         }
        //     }
        // }
        // return maxlen;

        //using binary search;
        let n=nums.length,dp=[];
        const binarySearch=(nums,target)=>{
            let left=0,right=nums.length-1;
            while(left<=right){
                let mid=Math.floor((left+right)/2);
                if(nums[mid]<target) left=mid+1;
                else right=mid-1;
            }
            return left;
        }
        for(let i=0;i<n;i++){
            let curr=nums[i];
            if(curr>dp[dp.length-1]){
                dp.push(curr);
            }
            else{
                const lower_index=binarySearch(dp,curr);
                dp[lower_index]=curr;
            }
        }
        return dp.length;
    }
}
