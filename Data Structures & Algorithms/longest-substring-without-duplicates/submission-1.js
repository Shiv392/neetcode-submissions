class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let length=s.length, set=new Set();
        let max_len=0, left=0;
        for(let right=0; right<length;right++){
            while(set.has(s[right])){
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            max_len = Math.max(max_len, right-left+1);
        }
        return max_len;
    }
}
