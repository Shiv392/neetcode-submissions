class MinHeap{
    constructor(){
        this.min_heap=[];
    }
    get_parent_index(index){
        return Math.floor((index-1)/2);
    }
    get_leftchild_index(index){
        return index*2+1;
    }
    get_rightchild_index(index){
        return index*2+2;
    }
    push(value){
        this.min_heap.push(value);
        this.heapify_up();
    }
    heapify_up(){
        let index=this.min_heap.length-1;
        while(index>0){
            let parent_index = this.get_parent_index(index);
            let parent_node = this.min_heap[parent_index];
            if(parent_node[0]<=this.min_heap[index][0]) break;

            [this.min_heap[index], this.min_heap[parent_index]]=[this.min_heap[parent_index], this.min_heap[index]];
            index = parent_index;
        }
    }
    pop(){
        if(this.min_heap.length==1) return this.min_heap.pop();
        const min = this.min_heap[0];
        this.min_heap[0] = this.min_heap.pop();
        this.heapify_down();
        return min; 
    }
    heapify_down(){
        let index=0;
        while(true){
            let smallerchild_index = index;
            let leftchild_index = this.get_leftchild_index(index);
            let rightchild_index = this.get_rightchild_index(index);
            if(leftchild_index<this.min_heap.length && this.min_heap[leftchild_index][0]<this.min_heap[smallerchild_index][0]){
                smallerchild_index = leftchild_index;
            }
            if(rightchild_index<this.min_heap.length && this.min_heap[rightchild_index][0]<this.min_heap[smallerchild_index][0]){
                smallerchild_index = rightchild_index;
            }

            if(this.min_heap[smallerchild_index][0]>=this.min_heap[index][0]) break;

            [this.min_heap[index], this.min_heap[smallerchild_index]] = [this.min_heap[smallerchild_index], this.min_heap[index]];
            index = smallerchild_index;
        }
    }
    is_empty(){
        return this.min_heap.length==0;
    }
}
 
class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
           let adj=Array.from({length : n}, ()=>[]);
    for(let [u,v,w] of times){
        adj[u-1].push([v-1,w]);
    }
    let min_heap = new MinHeap();
    min_heap.push([0,k-1]);
    const distance = new Array(n).fill(Infinity);
    distance[k-1]=0;

    while(!min_heap.is_empty()){
        const [d, node] = min_heap.pop();
        if(d>distance[node]) continue;

        for(let [next, weight] of adj[node]){
    let newDist = distance[node] + weight;
    if(newDist < distance[next]){
        distance[next] = newDist;
        min_heap.push([newDist, next]); // use newDist
    }
}
    }
    let ans=  Math.max(...distance);
    return ans == Infinity ? -1 : ans;
    }
}
