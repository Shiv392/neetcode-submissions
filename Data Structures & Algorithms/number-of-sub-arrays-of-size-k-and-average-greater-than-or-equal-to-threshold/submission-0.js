class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let length=arr.length, sum=0, left=0, cnt=0;
        for(let right=0; right<length; right++){
            sum+=arr[right];
            if(right-left+1==k){
                if(Math.floor(sum/k)>=threshold) cnt++;
                sum-=arr[left];
                left++;
            }
        }
        return cnt;
    }
}
