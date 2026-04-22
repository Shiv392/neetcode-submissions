class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let cnt=0;
        for(let i=0;i<s.length;i++){
            for(let j=i;j<s.length;j++){
                let left=i,right=j;
                while(left<right && s[left]==s[right]){
                    left++,right--;
                }
                cnt+=(left>=right) ? 1 : 0;
            }
        }
        return cnt;
    }
}
