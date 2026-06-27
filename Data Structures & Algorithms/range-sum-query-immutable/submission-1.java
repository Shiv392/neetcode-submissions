class NumArray {
    // 1. using brute force int[]nums;
    // 2. using prefix array
    int[]prefix;
    public NumArray(int[] nums) {
        // this.nums = nums;

        prefix = new int[nums.length+1];
        for(int i=1;i<=nums.length;i++){
            prefix[i] = nums[i-1]+prefix[i-1];
        }
    }
    
    public int sumRange(int left, int right) {
        // int sum = 0;
        // for(int i=left;i<=right;i++){
        //     sum+=this.nums[i];
        // }
        // return sum;

        //return in O(1)time
        int l=left+1, r=right+1;
        return prefix[r] - prefix[l-1];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */