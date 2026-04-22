class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n=nums.length,map=new Map();
        for(let i=0;i<n;i++){
            map.set(nums[i],map.get(nums[i])+1||1);
        }
        let bucket=[];
        for(let [key,value] of map){
            bucket[value]=bucket[value] ? bucket[value].add(key) : new Set().add(key);
        }
        let ans=[];
        for(let i=bucket.length-1;i>=0;i--){
            if(bucket[i]) ans.push(...bucket[i]);
            if(ans.length==k) break;
        }
        return ans;
    }
}
