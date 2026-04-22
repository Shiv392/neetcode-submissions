class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let length=nums.length, even_index=0;
        for(let i=0;i<length;i++){
            if(nums[i]%2==0){
                [nums[i], nums[even_index]]=[nums[even_index],nums[i]];
                even_index++;
            }
        }
        return nums;
    }
}
