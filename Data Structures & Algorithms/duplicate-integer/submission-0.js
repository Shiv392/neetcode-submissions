class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let n=nums.length,set=new Set();
        for(let i=0;i<n;i++){
            if(set.has(nums[i])) return true;
            set.add(nums[i]);
        }
        return false;
    }
}
