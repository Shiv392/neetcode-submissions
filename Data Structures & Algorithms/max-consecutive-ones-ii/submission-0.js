class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let length=nums.length, max_cnt=0, zero_cnt=0;
        let left=0;
        for(let right=0; right<length; right++){
            if(nums[right]==0) zero_cnt++;
            if(zero_cnt>1){
                if(nums[left]==0) zero_cnt--;
                left++;
            }
            max_cnt = Math.max(max_cnt, right-left+1);
        }
        return max_cnt;
    }
}
