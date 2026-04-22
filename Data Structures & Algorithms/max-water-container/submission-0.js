class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let leftheight=0,rightheight=heights.length-1;
        let maxwater=0;
        while(leftheight<rightheight){
            let currwater=Math.min(heights[leftheight],heights[rightheight])*(rightheight-leftheight);
            maxwater=Math.max(maxwater,currwater);
            heights[leftheight] < heights[rightheight] ? leftheight++ : rightheight--;
        }
        return maxwater;
    }
}
