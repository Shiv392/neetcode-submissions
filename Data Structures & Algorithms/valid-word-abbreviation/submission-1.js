class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let length=word.length, i=0, j=0;
        while(i<length && j<abbr.length){
            if(abbr[j]>='0' && abbr[j]<='9'){
             if(abbr[j]=='0') return false;
             let num=0;
             while(j<abbr.length && abbr[j]>='0' && abbr[j]<='9'){
                num = num*10+(abbr[j]-'0');
                j++;
             }
             i+=num;
            }
            else{
                if(word[i]!=abbr[j]) return false;
                i++, j++;
            }
        }
        return i==word.length && j==abbr.length
    }
}
