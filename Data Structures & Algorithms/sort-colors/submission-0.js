class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        //two pass solution
        let length=nums.length, zero_index = 0;
        for(let i=0;i<length;i++){
            if(nums[i]==0){
                [nums[i], nums[zero_index]] = [nums[zero_index], nums[i]];
                zero_index++;
            }
        }
        let one_index = zero_index;
        for(let i=0;i<length;i++){
            if(nums[i]==1){
                [nums[i], nums[one_index]] = [nums[one_index], nums[i]];
                one_index++;
            }
        }
        return nums;
    }
}
