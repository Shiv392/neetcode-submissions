class Solution {
    public int lengthOfLastWord(String s) {
        int length=s.length(), i=length-1;
        while(i>=0 && s.charAt(i)==' '){
            i--;
        }

        int ans=0;
        while(i>=0 && s.charAt(i)!=' '){
            i--;
            ans++;
        }
        return ans;
    }
}