class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let n=intervals.length,ans=[],index=0;
        while(index<n && intervals[index][1]<newInterval[0]){
            ans.push(intervals[index]);
            index++;
        }
        while(index<n && intervals[index][0]<=newInterval[1]){
          newInterval=[Math.min(newInterval[0],intervals[index][0]),Math.max(newInterval[1],intervals[index][1])];
          index++;
        }
        ans.push(newInterval);
        while(index<n){
            ans.push(intervals[index]);
            index++;
        }
        return ans;
    }
}
