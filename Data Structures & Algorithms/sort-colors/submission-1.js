class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        //two pass solution
        // let length=nums.length, zero_index = 0;
        // for(let i=0;i<length;i++){
        //     if(nums[i]==0){
        //         [nums[i], nums[zero_index]] = [nums[zero_index], nums[i]];
        //         zero_index++;
        //     }
        // }
        // let one_index = zero_index;
        // for(let i=0;i<length;i++){
        //     if(nums[i]==1){
        //         [nums[i], nums[one_index]] = [nums[one_index], nums[i]];
        //         one_index++;
        //     }
        // }
        // return nums;

        //one pass solution using dutch national flag algorithm
        let length=nums.length, left=0, mid=0, right=length-1;
        while(mid<=right){
            if(nums[mid]==0){
                [nums[left], nums[mid]] = [nums[mid], nums[left]];
                left++, mid++;
            }
            else if(nums[mid]==1) mid++;
            else{
                [nums[mid], nums[right]] = [nums[right], nums[mid]];
                right--;
            }
        }
        return nums;
    }
}
