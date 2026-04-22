class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let ans=[];
        const dfs=(str,open,close)=>{
            if(str.length==n*2){
                ans.push(str);
                return;
            }

            if(open<n){
                dfs(str+'(',open+1,close);
            }
            if(close<open){
                dfs(str+')',open,close+1);
            }
        }
        dfs('',0,0);
        return ans;
    }
}
