class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str='', length=s.length;
        for(let i=0;i<length;i++){
            let char_code = s[i].charCodeAt(0);
            if((char_code>=65 && char_code<=90) || (char_code>=97 && char_code<=122) || 
            (char_code>=48 && char_code<=57)
            ){
                str+=s[i].toLowerCase();
            }
        }
        let left=0, right=str.length-1;
        while(left<right){
            if(str[left]!=str[right]) return false;
            left++, right--;
        }
        return true;
    }
}
