class Solution {
    public int majorityElement(int[] nums) {
        //using frequency map
        int length=nums.length;
        Map<Integer, Integer>map = new HashMap<>();
        for(int num : nums){
            map.put(num, map.getOrDefault(num,0)+1);
        }
        for(int num: nums){
            if(map.get(num)>length/2) return num;
        }
        return length;
    }
}