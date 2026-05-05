class Solution {
    public int[][] kClosest(int[][] points, int k) {
        //approach
        //1. here we have to keep track of min distance 
        //2. we need to remove the farthest distance.
        //3. i.e we have to push origins into the max heap
        //here max heap will sort in basis of origin value 
        //if max heap size is greater then k then remove the orign with greatest value.
        //finally get all the points
        PriorityQueue<int[]>maxHeap = new PriorityQueue<>(
            (a,b)-> (b[0]*b[0]+b[1]*b[1])-(a[0]*a[0]+a[1]*a[1])
        );

        for(int[] point : points){
            maxHeap.offer(point);
            if(maxHeap.size()>k){
                maxHeap.poll();
            }
        }

        int[][] ans = new int[k][2];
        int i=0;
        while(!maxHeap.isEmpty()){
            ans[i] = maxHeap.poll();
            i++;
        }
        return ans;
    }
}
