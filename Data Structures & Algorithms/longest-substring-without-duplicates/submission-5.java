class Solution {
    public int lengthOfLongestSubstring(String s) {
               int length=s.length();
        if(length==0) return 0;
        int left=0, max_len=0;
        Map<Character, Integer>map = new HashMap<>();
        for(int right=0; right<length; right++){
            char c = s.charAt(right);
            if(map.containsKey(c)){
                left = Math.max(left, map.get(c)+1);
            }
            map.put(c, right);
            max_len = Math.max(max_len, right-left+1);
        }
        return max_len;
    }
}
