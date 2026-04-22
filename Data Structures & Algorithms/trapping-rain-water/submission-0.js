class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n=height.length;
        let leftmax=new Array(n).fill(0);
        let rightmin=new Array(n).fill(0);
        leftmax[0]=height[0],rightmin[n-1]=height[n-1];
        for(let i=1;i<n;i++){
            leftmax[i]=Math.max(leftmax[i-1],height[i]);
        }
        for(let i=n-2;i>=0;i--){
            rightmin[i]=Math.max(height[i],rightmin[i+1]);
        }
        let area=0;
        for(let i=0;i<n;i++){
            area+=Math.min(leftmax[i],rightmin[i])-height[i];
        }
        return area;
    }
}
