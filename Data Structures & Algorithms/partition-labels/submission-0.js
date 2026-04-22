class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let length=S.length,map=new Map();
        for(let i=0;i<length;i++){
            map.set(S[i],i);
        }
        let ans=[],end=0,start=0;
        for(let i=0;i<length;i++){
            const char=S[i];
            const index=map.get(char);
            end=Math.max(end,index);
            if(i==end){
                ans.push(end-start+1);
                start=end+1;
            }
        }
        return ans;
    }
}
