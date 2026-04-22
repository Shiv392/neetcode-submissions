class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let n=nums.length,ans=[];
        let maxqueue=[],left=0,right=0;
        while(right<n){
            while(maxqueue.length>0 && maxqueue[maxqueue.length-1]<nums[right]){
                maxqueue.pop();
            }
            maxqueue.push(nums[right]);
            if(right-left+1<k){
                right++;
            }
            else if(right-left+1==k){
                ans.push(maxqueue[0]);
                if(nums[left]==maxqueue[0]){
                    maxqueue.shift();
                }
                left++;
                right++;
            }
        }
        return ans;
    }
}
