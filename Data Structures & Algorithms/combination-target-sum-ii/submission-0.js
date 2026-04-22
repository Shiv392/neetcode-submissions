class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let length=candidates.length,ans=[];
        candidates.sort((a,b)=>a-b);
        const dfs=(patharr,currsum,index)=>{
            if(currsum==target){
                ans.push([...patharr]);
                return;
            }
            if(currsum>target || index>=length){
                return;
            }
            for(let i=index;i<length;i++){
                if(i>index  && candidates[i]==candidates[i-1]) continue;
                patharr.push(candidates[i]);
                currsum+=candidates[i];
                dfs(patharr,currsum,i+1);

                patharr.pop();
                currsum-=candidates[i];
            }
        }
        dfs([],0,0);
        return ans;
    }
}
