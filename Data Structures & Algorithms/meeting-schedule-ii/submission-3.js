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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
    //sweep line algorithm-------->
    let length=intervals.length;
    let start=new Array(length);
    let end=new Array(length);
    for(let i=0;i<length;i++){
        start.push(intervals[i].start);
        end.push(intervals[i].end);
    }
    start.sort((a,b)=>a-b);
    end.sort((a,b)=>a-b);
    let minrooms=0,rooms=0;
    let i=0,j=0;
    while(i<length && j<length){
        if(start[i]<end[j]){
            rooms++;
            i++;
        }
        else{
            rooms--;
            j++;
        }
        minrooms=Math.max(minrooms,rooms);
    }
    return minrooms;
    }
}
