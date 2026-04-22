class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let len=nums.length, nonzero_index=0;
        for(let i=0;i<len;i++){
            if(nums[i]!=0){
                [nums[i], nums[nonzero_index]] = [nums[nonzero_index], nums[i]];
                nonzero_index++;
            }
        }
        return nums;
    }
}
