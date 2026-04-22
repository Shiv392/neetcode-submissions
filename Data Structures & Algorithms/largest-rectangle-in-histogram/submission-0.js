class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let length=heights.length;
        let left_min = new Array(length), right_min = new Array(length);
        let stack = [];
        for(let i=0;i<length;i++){
            while(stack.length && heights[i]<=heights[stack[stack.length-1]]){
            stack.pop();
            }
            left_min[i] = stack.length==0 ? -1 : stack[stack.length-1];
            stack.push(i);
        }

        stack=[];
        for(let i=length-1;i>=0;i--){
            while(stack.length && heights[i]<=heights[stack[stack.length-1]]){
            stack.pop();
            }
            right_min[i] = stack.length==0 ? length : stack[stack.length-1];
            stack.push(i);
        }

        let max_area=0;
        for(let i=0;i<length;i++){
            let width = right_min[i]-left_min[i]-1;
            let area = heights[i]*width;
            max_area = Math.max(max_area, area);
        }
        return max_area;
    }
}
