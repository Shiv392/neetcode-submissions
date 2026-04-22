class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        // return nums.map(ele=> ele**2).sort((a,b)=>a-b);

        let length=nums.length, ans=new Array(length);
        let left=0, right=length-1, ans_index=length-1;
        while(left<=right){
            if(Math.abs(nums[left])>Math.abs(nums[right])){
                ans[ans_index]=nums[left]**2;
                left++;
            }
            else{
                ans[ans_index]=nums[right]**2;
                right--;
            }
            ans_index--
        }
        return ans;
    }
}
