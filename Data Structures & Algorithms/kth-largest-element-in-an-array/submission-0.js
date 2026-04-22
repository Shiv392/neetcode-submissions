class MinHeap{
    constructor(){
        this.heap=[];
    }
    getParentindex(index){
        return Math.floor((index-1)/2);
    }
    getLeftchildindex(index){
        return index*2+1;
    }
    getRightchildindex(index){
        return index*2+2;
    }
    add(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp(){
        let i=this.heap.length-1;
        while(i>0){
            let parentindex=this.getParentindex(i);
            if(this.heap[parentindex]<=this.heap[i]) break;
            [this.heap[parentindex],this.heap[i]]=[this.heap[i],this.heap[parentindex]];
            i=parentindex;
        }
    }
    pop(){
        const top=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown();
        return top;
    }
    heapifyDown(){
        let i=0;
        while(this.getLeftchildindex(i)<this.heap.length){
            let smallerchildindex=this.getLeftchildindex(i);
            if(this.getRightchildindex(i)<this.heap.length 
            && this.heap[this.getRightchildindex(i)]<this.heap[smallerchildindex]){
                smallerchildindex=this.getRightchildindex(i);
            }
            if(this.heap[i]<=this.heap[smallerchildindex]) break;
    [this.heap[i],this.heap[smallerchildindex]]=[this.heap[smallerchildindex],this.heap[i]];
            i=smallerchildindex;
        }
    }
    size(){
        return this.heap.length;
    }
    peek(){
        return this.heap[0];
    }
}
class Solution {
    findKthLargest(nums, k) {
        let n=nums.length,minheap=new MinHeap();
        for(let i=0;i<n;i++){
        minheap.add(nums[i]);
        if(minheap.size()>k) minheap.pop();
        }
        return minheap.peek();
    }
}
