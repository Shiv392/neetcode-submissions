class Solution {
    public long pickGifts(int[] gifts, int k) {
        PriorityQueue<Integer>maxHeap = new PriorityQueue<>((a,b)-> b-a);
        for(int gift : gifts){
            maxHeap.offer(gift);
        }
        for(int i=0;i<k;i++){
            int max = maxHeap.poll();
            maxHeap.offer((int) Math.floor(Math.sqrt(max)));
        }
        int sum =0;
        while(!maxHeap.isEmpty()){
            sum+=maxHeap.poll();
        }
        return sum;
    }
}