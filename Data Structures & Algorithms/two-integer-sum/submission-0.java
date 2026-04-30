class Solution {
    public int[] twoSum(int[] nums, int target) {
        int length=nums.length;
        int[] ans=new int[2];
        Arrays.fill(ans, -1);
        Map<Integer, Integer>map = new HashMap<>();
        for(int i=0;i<length;i++){
            if(map.containsKey(target-nums[i])){
                ans[0]=map.get(target-nums[i]);
                ans[1]=i;
            }
            map.put(nums[i], i);
        }
        return ans;
    }
}
