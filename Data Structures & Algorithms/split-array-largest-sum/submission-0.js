class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let length=nums.length;
        let min_sum=Math.max(...nums);
        let max_sum=nums.reduce((acc,curr)=>acc+curr,0);
        const check = (limit)=>{
            let cnt=1, sum=0;
            for(let i=0;i<length;i++){
                sum+=nums[i];
                if(sum>limit){
                    cnt++;
                    sum=nums[i];
                }
            }
            return cnt<=k;
        }
        for(let sum=min_sum; sum<=max_sum; sum++){
            if(check(sum)) return sum;
        }
        return -1;
    }
}
