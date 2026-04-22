class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        nums.sort((a,b)=>a-b);
        let length=nums.length, ans=[];
        let used = new Array(length).fill(false);
        const dfs = (arr, index)=>{
          if(arr.length==length){
            ans.push([...arr]);
            return;
          }

          for(let i=0;i<length;i++){
            if(used[i]) continue;
            if(i>index && nums[i]==nums[i-1] && !used[i-1]) continue;

            arr.push(nums[i]);
            used[i]=true;

            dfs(arr, i+1);

            arr.pop();
            used[i]=false;
          }
        }
        dfs([], 0);
        return ans;
    }
}
