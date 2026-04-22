class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let length=nums.length, ans=[];
        const dfs = (arr, index)=>{
            if(index==length){
                ans.push([...arr]);
                return;
            }

            dfs(arr, index+1);

            arr.push(nums[index]);
            dfs(arr, index+1);

            arr.pop();
        }
        dfs([], 0);
        return ans;
    }
}
