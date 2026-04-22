class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let adj=Array.from({length : numCourses}, ()=>[]);
        let indegree=new Array(numCourses).fill(0);
        for(let [u,v] of prerequisites){
            adj[v].push(u);
            indegree[u]++;
        }
        let queue=[];
        for(let i=0;i<numCourses;i++){
            if(indegree[i]==0) queue.push(i);
        }
        let topo=[];
        while(queue.length>0){
            let node = queue.shift();
            topo.push(node);
            for(let neighbour of adj[node]){
                indegree[neighbour]--;
                if(indegree[neighbour]==0) queue.push(neighbour);
            }
        }
        return topo.length == numCourses ? topo : [];
    }
}
