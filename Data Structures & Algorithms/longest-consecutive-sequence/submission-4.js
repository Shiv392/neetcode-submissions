class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //using sorting
        nums=[...new Set(nums)];
        if(nums.length==0) return 0;
        let maxlength=0,cnt=1,n=nums.length;
        nums.sort((a,b)=>a-b);
        for(let i=1;i<n;i++){
            if(nums[i]==nums[i-1]+1){
                cnt++;
                maxlength=Math.max(maxlength,cnt);
            }
            else{
                cnt=1;
            }
        }
        return Math.max(maxlength,cnt);
    }
}
