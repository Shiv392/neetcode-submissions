class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length()!=t.length()) return false;
        char[] str_arr1=s.toCharArray();
        char[] str_arr2= t.toCharArray();
        Arrays.sort(str_arr1);
        Arrays.sort(str_arr2);

       return Arrays.equals(str_arr1, str_arr2);
    }
}
