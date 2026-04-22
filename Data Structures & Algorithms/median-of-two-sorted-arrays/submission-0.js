class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if(nums1.length>nums2.length) return this.findMedianSortedArrays(nums2, nums1);
        let x=nums1.length, y=nums2.length;

        let left=0, right=x;
        while(left<=right){
            let partition_x = Math.floor((left+right)/2);
            let partition_y = Math.floor((x+y+1)/2)-partition_x;

            let leftmax_x = partition_x == 0 ? -Infinity : nums1[partition_x-1];
            let rightmin_x = partition_x == x ? Infinity : nums1[partition_x];

            let leftmax_y = partition_y == 0 ? -Infinity : nums2[partition_y-1];
            let rightmin_y = partition_y == y ? Infinity : nums2[partition_y];

            //valid condition 
            if(leftmax_x <= rightmin_y && leftmax_y <= rightmin_x){
                let length=x+y;
                if(length%2==0){
                    return (Math.max(leftmax_x, leftmax_y) + Math.min(rightmin_x, rightmin_y))/2
                }
                else{
                    return Math.max(leftmax_x, leftmax_y);
                }
            }
            else if(leftmax_x > rightmin_y) right = partition_x-1;
            else left = partition_x+1;
        }
    }
}
