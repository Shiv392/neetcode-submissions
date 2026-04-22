class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let left=0, right=nums.length-1, length=nums.length;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            if(mid>0 && nums[mid]<nums[mid-1]) right=mid-1;
            else if(mid<length-1 && nums[mid]<nums[mid+1]) left=mid+1;
            else return mid;
        }
        return -1;
    }
}
