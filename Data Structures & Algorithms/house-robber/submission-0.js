class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        //simple dp
        let n=nums.length;
        if(n==0) return 0;
        if(n==1 || n==2) return Math.max(...nums);
        let max=[nums[0],Math.max(nums[0],nums[1])];
        for(let i=2;i<n;i++){
            let currmax=Math.max(max[i-1],nums[i]+max[i-2]);
            max.push(currmax);
        }
        return max[n-1];
    }
}
