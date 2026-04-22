class Solution {
    public void moveZeroes(int[] nums) {
        int length=nums.length;
        int nonzero_index = 0;
        for(int i=0;i<length;i++){
            if(nums[i]!=0){
                int temp = nums[nonzero_index];
                nums[nonzero_index]=nums[i];
                nums[i]=temp;
                nonzero_index++;
            }
        }
    }
}