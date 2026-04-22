class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let n=nums.length,ans=[],path=[];
        const backtracking=(index,sum)=>{
            if(sum==target){
                ans.push([...path]);
                return;
            }
            if(sum>target || index==n){
                return;
            }

            //dont add
            backtracking(index+1,sum);

            //add
            path.push(nums[index]);
            backtracking(index,sum+nums[index]);
            path.pop();
        }
        backtracking(0,0);
        return ans;
    }
}
