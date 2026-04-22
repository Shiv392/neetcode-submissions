class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let n=s.length,ans='',maxlen=0;
        for(let i=0;i<n;i++){
            for(let j=0;j<=1;j++){
                let left=i,right=i+j;
                while(left>=0 && right<n && s[left]==s[right]){
                    let len=right-left+1;
                    if(len>maxlen){
                        maxlen=len;
                        ans=s.substring(left,right+1);
                    }
                    left--,right++;
                }
            }
        }
        return ans;
    }
}
