class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {
        g.sort((a,b)=>a-b);
        s.sort((a,b)=>a-b);
        let i=0, j=0, ans=0;
        while(i<g.length && j<s.length){
            if(s[j]>=g[i]){
                ans++;
                i++, j++;
            }
            else if(s[j]<g[i]) j++;
            else i++;
        }
        return ans;
    }
}
