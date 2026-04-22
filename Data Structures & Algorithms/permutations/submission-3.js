class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let length=nums.length,ans=[];
        let visited=new Array(length).fill(false);
        const dfs=(path)=>{
        for(let i=0;i<length;i++){
            if(path.length==length){
                ans.push([...path]);
                return;
            }
            if(visited[i]) continue;
            path.push(nums[i]);
            visited[i]=true;
            dfs(path);
            visited[i]=false;
            path.pop();
        }
        }
        dfs([]);
        return ans;
    }
}
