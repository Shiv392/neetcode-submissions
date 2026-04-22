class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let length=nums.length,ans=[];
        const dfs=(arr,sum,index)=>{
        if(sum==target){
            ans.push([...arr]);
            return;
        }
        if(sum>target || index>=length) return;
        //just move forward with the current number till their sum greater then target
        arr.push(nums[index]);
        dfs(arr,sum+nums[index],index);

        //remove last inserted value
        arr.pop();
        dfs(arr,sum,index+1);
        }
        dfs([],0,0);
        return ans;
    }
}
