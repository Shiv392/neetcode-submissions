class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    maximumOddBinaryNumber(s) {
        let cnt=0, length=s.length;
        for(let i=0;i<length;i++){
            if(s[i]=='1') cnt++;
        }
        return '1'.repeat(cnt-1) + '0'.repeat(s.length-cnt)+'1';
    }
}
