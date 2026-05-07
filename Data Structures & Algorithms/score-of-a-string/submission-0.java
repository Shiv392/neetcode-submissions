class Solution {
    public int scoreOfString(String s) {
        int length=s.length(), sum=0;
        for(int i=0;i<length-1;i++){
            char c1 = s.charAt(i);
            char c2 = s.charAt(i+1);
            sum+= Math.abs((int)c1 - (int)c2);
        }
        return sum;
    }
}