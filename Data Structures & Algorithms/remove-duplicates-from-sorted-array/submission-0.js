class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let length=nums.length, j=0;
        for(let i=0;i<length;i++){
            if(nums[i]!=nums[j]){
                j++;
                nums[j]=nums[i];
            }
        }
        return j+1;
    }
}
