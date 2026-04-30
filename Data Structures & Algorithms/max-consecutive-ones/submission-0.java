class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int length=nums.length, oneCnt=0, maxOneCnt=0;
        for(int i=0;i<length;i++){
            if(nums[i]==1) oneCnt++;
            else oneCnt=0;
            maxOneCnt = Math.max(oneCnt, maxOneCnt);
        }
        return maxOneCnt;
    }
}