class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let length=blocks.length, w_cnt=0;
        for(let i=0;i<k;i++){
            blocks[i]=='W' && w_cnt++;
        }
        let ans=w_cnt;
        for(let i=k;i<length;i++){
            if(blocks[i-k]=='W') w_cnt--;
            if(blocks[i]=='W') w_cnt++;
            ans=Math.min(ans, w_cnt);
        }
        return ans;
    }
}
