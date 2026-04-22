class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //brute force
        // let n=nums.length;
        // let leftarr=new Array(n).fill(1);
        // let rightarr=new Array(n).fill(1);
        // for(let i=1;i<n;i++){
        //     leftarr[i]=leftarr[i-1]*nums[i-1];
        // }
        // for(let i=n-2;i>=0;i--){
        //     rightarr[i]=rightarr[i+1]*nums[i+1];
        // }
        // let ans=new Array(n).fill(1);
        // for(let i=0;i<n;i++){
        //     ans[i]=leftarr[i]*rightarr[i];
        // }
        // return ans;

        let n=nums.length,ans=new Array(n).fill(1);
        let leftproduct=1;
        for(let i=0;i<n;i++){
            ans[i]=leftproduct;
            leftproduct*=nums[i]
        }
        let rightproduct=1;
        for(let i=n-1;i>=0;i--){
            ans[i]*=rightproduct;
            rightproduct*=nums[i]
        }
        return ans;
    }
}
