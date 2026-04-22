class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        nums.sort((a,b)=>a-b);
        let length=nums.length, ans=[];
        let used = new Array(length).fill(false);
        const dfs = (arr)=>{
          if(arr.length==length){
            ans.push([...arr]);
            return;
          }

          for(let i=0;i<length;i++){
            if(used[i]) continue;
            if(i>0 && nums[i]==nums[i-1] && !used[i-1]) continue;

            arr.push(nums[i]);
            used[i]=true;

            dfs(arr);

            arr.pop();
            used[i]=false;
          }
        }
        dfs([]);
        return ans;
    }
}

