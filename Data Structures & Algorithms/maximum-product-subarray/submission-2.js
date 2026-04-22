class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let n=nums.length,max=-Infinity;
        let prefix=1,suffix=1;
        for(let i=0;i<n;i++){
            if(prefix==0) prefix=1;
            if(suffix==0) suffix=1;
            prefix*=nums[i];
            suffix*=nums[n-i-1];
            max=Math.max(max,Math.max(prefix,suffix));
        }
        return max==-0 ? 0 : max;
    }
}
