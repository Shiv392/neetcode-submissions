class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let n=nums.length;
        let ans=[],path=[];
        const backtrack=()=>{
            if(path.length==n){
                ans.push([...path]);
                return;
            }
            for(let i=0;i<n;i++){
                if(!path.includes(nums[i])){
                    path.push(nums[i]);
                    backtrack();
                    path.pop();
                }
            }
        }
        backtrack();
        return ans;
    }
}
