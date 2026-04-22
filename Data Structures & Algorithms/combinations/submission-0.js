class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let ans=[];
        const dfs = (arr, num)=>{
            if(arr.length==k){
                ans.push([...arr]);
                return;
            }
            if(num>n || arr.length>k) return;
            for(let i=num;i<=n;i++){
            arr.push(i);

            dfs(arr, i+1);
            arr.pop();
            }
        }
        dfs([], 1);
        return ans;
    }
}
