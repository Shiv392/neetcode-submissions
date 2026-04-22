class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //using set object
        if(nums.length==0) return 0;
        let set=new Set(nums),n=nums.length;
        let maxlength=1;
        for(let i=0;i<n;i++){
            if(!set.has(nums[i]-1)){
                let cnt=1;
                while(set.has(nums[i]+1)){
                    cnt++;
                    nums[i]=nums[i]+1;
                    maxlength=Math.max(maxlength,cnt);
                }
            }
        }
        return maxlength;

        //using sorting
        // nums=[...new Set(nums)];
        // if(nums.length==0) return 0;
        // let maxlength=0,cnt=1,n=nums.length;
        // nums.sort((a,b)=>a-b);
        // for(let i=1;i<n;i++){
        //     if(nums[i]==nums[i-1]+1){
        //         cnt++;
        //         maxlength=Math.max(maxlength,cnt);
        //     }
        //     else{
        //         cnt=1;
        //     }
        // }
        // return Math.max(maxlength,cnt);
    }
}
