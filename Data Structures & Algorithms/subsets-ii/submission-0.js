class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let length=nums.length,subset=[];
        nums.sort((a,b)=>a-b);
        const dfs=(patharr,index)=>{
            subset.push([...patharr]);
            for(let i=index;i<length;i++){
                if(i!=index && nums[i]==nums[i-1]) continue;
                patharr.push(nums[i]);

                dfs(patharr,i+1);
                patharr.pop();
            }
        }
        dfs([],0);
        return subset.sort((a,b)=>{
            const minlen=Math.min(a.length,b.length);
            for(let i=0;i<minlen;i++){
                if(a[i]!=b[i]) return a[i]-b[i];
            }
            return a.length-b.length;
        })
    }
}
