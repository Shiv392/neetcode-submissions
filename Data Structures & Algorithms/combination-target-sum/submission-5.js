class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
    let length=nums.length, ans=[];
const dfs = (arr, index, sum)=>{
    if(index>=length || sum>target) return;
    if(sum==target){
        ans.push([...arr]);
        return;
    }
    sum+=nums[index];
    arr.push(nums[index]);

    dfs(arr, index, sum);

    sum-=nums[index];
    arr.pop();
    dfs(arr, index+1, sum);
}
dfs([], 0, 0);
return ans;
    }
}


