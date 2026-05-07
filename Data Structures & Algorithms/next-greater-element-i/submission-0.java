class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int length2=nums2.length;
        Map<Integer, Integer>map = new HashMap<>();
        Stack<Integer>stack = new Stack<>();
        for(int i=0;i<length2;i++){
            while(!stack.isEmpty() && stack.peek()<nums2[i]){
                int num = stack.pop();
                map.put(num, nums2[i]);
            }
            stack.add(nums2[i]);
        }

        int length1=nums1.length;
        int[] ans = new int[length1];
        Arrays.fill(ans, -1);
        for(int i=0;i<length1;i++){
            if(map.containsKey(nums1[i])){
                ans[i] = map.get(nums1[i]);
            }
        }
        return ans;
    }
}