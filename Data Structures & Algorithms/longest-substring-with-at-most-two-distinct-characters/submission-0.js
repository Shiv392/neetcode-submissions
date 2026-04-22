class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        let length=s.length, map=new Map();
        let left=0, max_len=0;
        for(let right=0; right<length; right++){
            map.set(s[right], map.get(s[right])+1||1);
            while(map.size>2){
                map.set(s[left], map.get(s[left])-1);
                if(map.get(s[left])==0) map.delete(s[left]);
                left++;
            }
            max_len = Math.max(max_len, right-left+1);
        }
        return max_len;
    }
}
