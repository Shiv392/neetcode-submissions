/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        let n=intervals.length;
        intervals.sort((a,b)=>a.start-b.start);
        let prev=intervals[0];
        for(let i=1;i<n;i++){
            let curr=intervals[i];
            if(curr.start<prev.end) return false;
            prev=curr;
        }
        return true;
    }
}
