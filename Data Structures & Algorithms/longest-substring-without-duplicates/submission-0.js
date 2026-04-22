class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n=s.length,map=new Map();
        let ans=0,left=0,right=0;
        while(right<n){
            if(!map.has(s[right])){
                map.set(s[right],1);
                ans=Math.max(ans,right-left+1);
                right++;
            }
            else{
                map.delete(s[left]);
                left++;
            }
        }
        return ans;
    }
}
