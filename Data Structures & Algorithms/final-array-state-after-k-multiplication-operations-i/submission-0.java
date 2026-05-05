class Solution {
    public int[] getFinalState(int[] nums, int k, int multiplier) {
        PriorityQueue<int[]>pq = new PriorityQueue<>(
            (a,b)-> a[0]==b[0] ? a[1]-b[1] : a[0]-b[0]
        );
        int length=nums.length;
        for(int i=0;i<length;i++){
            pq.offer(new int[]{nums[i], i});
        }

        while(k-- >0){
            int[] curr = pq.poll();
            curr[0]=curr[0]*multiplier;
            pq.offer(curr);
        }

        int[] ans = new int[length];
        while(!pq.isEmpty()){
            int[] curr = pq.poll();
            ans[curr[1]]=curr[0];
        }
        return ans;
    }
}