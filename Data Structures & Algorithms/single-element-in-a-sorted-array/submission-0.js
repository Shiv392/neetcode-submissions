class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {
        let length=nums.length, left=0, right=length-1;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid]!=nums[mid-1] && nums[mid]!=nums[mid+1]) return nums[mid];
            let left_size = nums[mid]==nums[mid-1] ? mid-1 : mid;
            if(left_size%2==0) left=mid+1;
            else right=mid-1;
        }
        return nums[left];
    }
}
