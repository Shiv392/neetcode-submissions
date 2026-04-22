class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s=s.split(' ').join('');
        let left=0,right=s.length-1;
        const alphaNum=(c)=>{
            const charcode=c.charCodeAt(0);
            return (
                (65<= charcode && charcode<=90) || (97<=charcode && charcode<=122) || 
                (48<=charcode && charcode<=57)
            );
        }
        while(left<right){
            while(left<right && !alphaNum(s[left])){
                left++;
            }
            while(left<right && !alphaNum(s[right])){
                right--;
            }
            if(s[left].toLowerCase()!=s[right].toLowerCase()) return false;
            left++,right--;
        }
        return true;
    }
}
