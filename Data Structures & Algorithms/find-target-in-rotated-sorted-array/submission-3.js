class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left=0, right=nums.length-1;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid]==target) return mid;
            //first sorted part----->
            else if(nums[left]<=nums[mid]){
            //check if target lies between left and mid;
            if(nums[left]<=target && target<=nums[mid]) right=mid-1;
            else left=mid+1;
            }
            //check into the second sorted part------->
            else{
                //check if target lies between 
                if(nums[mid]<=target && target<=nums[right]) left=mid+1;
                else right=mid-1;
            }
        }
        return -1;
    }
}
