class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let n=intervals.length;
        intervals.sort((a,b)=>a[0]-b[0]);
        let ans=[intervals[0]];
        for(let i=1;i<n;i++){
            let curr=intervals[i],prev=ans[ans.length-1];
            if(prev[1]>=curr[0]){
                prev[1]=Math.max(prev[1],curr[1]);
            }
            else{
                prev=curr;
                ans.push(prev);
            }
        }
        return ans;
    }
}
