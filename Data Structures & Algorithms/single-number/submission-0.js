class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let ans=0,n=nums.length;
        for(let i=0;i<n;i++){
            ans^=nums[i]
        }
        return ans;
    }
}
