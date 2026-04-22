class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a,b)=>a-b);
        let left=0, right=k-1, ans=Infinity, length=nums.length;
        while(right<length){
            ans=Math.min(ans, nums[right]-nums[left]);
            left++, right++;
        }
        return ans;
    }
}
