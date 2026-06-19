class Solution {
    public int pivotIndex(int[] nums) {
        int length=nums.length;
        int totalSum = Arrays.stream(nums).reduce(0,(a,b)->a+b);
        int leftSum = 0;
        for(int i=0;i<length;i++){
            totalSum-=nums[i];
            if(totalSum == leftSum) return i;
            leftSum+=nums[i];
        }
        return -1;
    }
}