class Solution {
    public int maxSatisfied(int[] customers, int[] grumpy, int minutes) {
        int length=customers.length;

        //frist get the sum of all satisfied customer;
        int baseSum=0;
        for(int i=0;i<length;i++){
            if(grumpy[i]==0) baseSum+=customers[i];
        }
        //now convert all 1 into 0 and when oneCnt>k then remove the left size.
        int maxExtra=0, extra=0;
        for(int i=0; i<length; i++){
            if(grumpy[i]==1){
                extra+= customers[i];
            }

        //shrink window if size is greater then minutes;
            if(i>=minutes){
                if(grumpy[i-minutes]==1){
                    extra-=customers[i-minutes];
                }
            }
            maxExtra = Math.max(maxExtra, extra);
        }
        return baseSum+maxExtra;
    }
}