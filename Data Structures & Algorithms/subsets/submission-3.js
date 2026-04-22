class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let length=nums.length,ans=[];
        const dfs=(patharr,index)=>{
            if(index==length){
                ans.push([...patharr]);
                return;
            }
            dfs(patharr,index+1);

            patharr.push(nums[index]);
            dfs(patharr,index+1);

            patharr.pop();
        }
        dfs([],0);
        return ans;
    }
}
