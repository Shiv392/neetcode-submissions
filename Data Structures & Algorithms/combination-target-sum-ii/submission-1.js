class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let length=candidates.length, ans=[];
        let used = new Array(length).fill(false);
        candidates.sort((a,b)=>a-b);
        const dfs = (arr, index, sum)=>{
            if(index>=length || sum>target) return;
            if(sum==target){
                ans.push([...arr]);
                return;
            }
            for(let i=index;i<length;i++){
                if(used[i]) continue;
                if(i>index && candidates[i]==candidates[i-1] && !used[i-1]) continue;

                sum+=candidates[i];
                arr.push(candidates[i]);
                used[i]=true;
                dfs(arr, i, sum);

                sum-=candidates[i];
                arr.pop();
                used[i]=false;
            }
        }
        dfs([], 0, 0);
        return ans;
    }
}
