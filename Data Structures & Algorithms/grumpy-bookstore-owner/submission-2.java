class Solution {
    public int maxSatisfied(int[] customers, int[] grumpy, int minutes) {
        int length=customers.length, baseSum=0;
        for(int i=0;i<length;i++){
            if(grumpy[i]==0) baseSum+=customers[i];
        }

        int extraSum=0, maxExtraSum=0, left=0;
        for(int right=0; right<length; right++){
            if(grumpy[right]==1) extraSum+=customers[right];

            if(right-left+1>minutes){
                if(grumpy[left]==1){
                    extraSum-=customers[left];
                }
                left++;
            }
            maxExtraSum = Math.max(maxExtraSum, extraSum);
        }
        return baseSum+maxExtraSum;
    }
}