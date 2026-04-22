class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        //brute force
        // let length=nums.length;
        // for(let i=0;i<length;i++){
        //     for(let j=i+1;j<length;j++){
        //         if(nums[i]==nums[j] && Math.abs(i-j)<=k) return true;
        //     }
        // }
        // return false;

        //using extra space
        let length=nums.length, map=new Map();
        for(let i=0;i<length;i++){
            if(map.has(nums[i]) && Math.abs(i-map.get(nums[i]))<=k) return true;
            map.set(nums[i], i); 
        }
        return false;
    }
}
