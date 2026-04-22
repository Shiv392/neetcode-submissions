class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let n=nums.length,ans=[],path=[];
        const backtrack=(index)=>{
            if(index==n){
                ans.push([...path]);
                return;
            }
            //dont pick ---->
            backtrack(index+1);

            //pick ----->
            path.push(nums[index]);
            backtrack(index+1);
            path.pop();
        }
        backtrack(0);
        return ans;
    }
}
