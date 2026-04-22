class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let n=nums.length,ans=[],path=[];
        const used=new Array(n).fill(false);
        const backtracking=()=>{
        if(path.length==n){
            ans.push([...path]);
            return;
        }
        for(let i=0;i<n;i++){
            if(used[i]) continue;
            path.push(nums[i]);
            used[i]=true;
            backtracking();
            path.pop();
            used[i]=false;
        }
        }
        backtracking();
        return ans;
    }
}
