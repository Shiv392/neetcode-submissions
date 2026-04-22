class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let length=nums.length,ans=[];
        const dfs=(subset,index)=>{
        if(index==length){
            ans.push([...subset]);
            return;
        }
        //just move to the next position
        dfs(subset,index+1);

        //add number and move to the nextposition
        subset.push(nums[index]);
        dfs(subset,index+1);
        //for backtracking, remove last inserted num
        subset.pop();
        }
        dfs([],0);
        return ans;
    }
}
