class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let length=nums.length,minjump=0,maxend=0;
        let maxreach=0;
        for(let i=0;i<length-1;i++){
            if(i>maxreach) return -1;
            maxreach=Math.max(maxreach,i+nums[i]);
            if(i==maxend){
                minjump++;
                maxend=maxreach;
            }
        }
        return minjump;
    }
}
