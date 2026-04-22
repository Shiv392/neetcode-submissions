class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
    let length=nums.length,ans=[];
    const dfs=(arr,sum,index)=>{
        if(sum>target || index>=length) return;
        if(sum==target){
            ans.push([...arr]);
            return;
        }

        arr.push(nums[index]);
        dfs(arr,sum+nums[index],index);
        arr.pop();
        dfs(arr,sum,index+1);
    }
    dfs([],0,0);
    return ans;
    }
}
