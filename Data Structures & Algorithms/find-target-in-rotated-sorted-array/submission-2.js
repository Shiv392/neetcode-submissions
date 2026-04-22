class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left=0,right=nums.length-1;
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            if(nums[mid]==target) return mid;
            else if(nums[mid]>=nums[left]){
                if(nums[mid]>target && target>=nums[left]) right=mid-1;
                else left=mid+1;
            }
            else{
                if(target>nums[mid] && target<=nums[right]) left=mid+1;
                else right=mid-1;
            }
        }
        return -1;
    }
}
