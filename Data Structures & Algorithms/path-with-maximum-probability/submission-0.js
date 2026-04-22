class Maxheap{
    constructor(){
        this.max_queue = [];
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
        this.max_queue.push(value);
        this.heapify_up();
    }
    heapify_up(){
        let index = this.max_queue.length-1;
        while(index>0){
        let parent_index = this.get_parent_index(index);
        let parent_node = this.max_queue[parent_index];
        if(parent_node[0]>= this.max_queue[index][0]) break;

        [this.max_queue[index], this.max_queue[parent_index]] = [this.max_queue[parent_index], this.max_queue[index]];
        index = parent_index;
        }
    }
    pop(){
        if(this.max_queue.length==1) return this.max_queue.pop();
        const max = this.max_queue[0];
        this.max_queue[0] = this.max_queue.pop();
        this.heapify_down();
        return max;
    }
    heapify_down(){
        let index=0;
        while(true){
            let greaterchild_index = index;
            let leftchild_index = this.get_leftchild_index(index);
            let rightchild_index = this.get_rightchild_index(index);
            if(leftchild_index<this.max_queue.length && this.max_queue[leftchild_index][0]>this.max_queue[greaterchild_index][0]){
                greaterchild_index = leftchild_index;
            }
            if(rightchild_index<this.max_queue.length && this.max_queue[rightchild_index][0]>this.max_queue[greaterchild_index][0]){
                greaterchild_index = rightchild_index;
            }

            if(this.max_queue[greaterchild_index][0]<=this.max_queue[index][0]) break;

            [this.max_queue[index], this.max_queue[greaterchild_index]] = [this.max_queue[greaterchild_index], this.max_queue[index]];
            index = greaterchild_index;
        }
    }
    is_empty(){
        return this.max_queue.length==0;
    }
}
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n, edges, succProb, start_node, end_node) {
        let adj=Array.from({length:n}, ()=>[]), distance = new Array(n).fill(0);
    for(let i=0;i<edges.length;i++){
        const [u,v] = edges[i], weight = succProb[i];
        adj[u].push([v, weight]);
        adj[v].push([u, weight]);
    }
    const max_queue = new Maxheap();

    max_queue.push([1, start_node]);
    distance[start_node] = 1; 
    while(!max_queue.is_empty()){
        const [d, node] = max_queue.pop();
        if(d<distance[node]) continue;

        if(node == end_node) return d;

        for(let [next, weight] of adj[node]){
            if(weight*distance[node]>distance[next]){
                distance[next] = weight*distance[node];
                max_queue.push([weight*distance[node], next]);
            }
        }
    }
    return 0;
    }
}
