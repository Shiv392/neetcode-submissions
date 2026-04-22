class Solution {
    /**
     * @param {string[]} words
     * @return {number}
     */
    countPrefixSuffixPairs(words) {
       let length=words.length, cnt=0;
       const is_prefix_suffix = (word1, word2)=>{
        //checking for prefix
        let i=0, j=0;
        while(i<word1.length){
            if(word1[i]!=word2[j]) return false;
            i++, j++;
        }

        //checking for suffix
        i=word1.length-1, j=word2.length-1;
        while(i>=0){
            if(word1[i]!=word2[j]) return false;
            i--, j--;
        }
        return true;
       }
       for(let i=0;i<length-1;i++){
        for(let j=i+1;j<length;j++){
            if(words[i].length<= words[j].length && is_prefix_suffix(words[i], words[j])) cnt++;
        }
       } 
       return cnt;
    }
}
