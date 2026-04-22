class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        int length=nums.length;
        List<List<Integer>>ans_list = new ArrayList<>();

        Arrays.sort(nums);
        for(int i=0;i<length-2;i++){
            if(i>0 && nums[i]==nums[i-1]) continue;

            int left=i+1, right=length-1;
            while(left<right){
                int sum = nums[i]+nums[left]+nums[right];
                if(sum==0){
                    List<Integer>list = new ArrayList<>();
                    list.add(nums[i]);
                    list.add(nums[left]);
                    list.add(nums[right]);
                    
                    while(left<length-1 && nums[left]==nums[left+1]){
                        left++;
                    }
                    while(right>0 && nums[right]==nums[right-1]){
                        right--;
                    }
                    ans_list.add(list);
                    left++;
                    right--;
                }
                else if(sum<0){
                    left++;
                }
                else{
                    right--;
                }
            }
        }
        return ans_list;
    }
}
