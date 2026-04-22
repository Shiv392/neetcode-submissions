class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adj=Array.from({length : numCourses}, ()=>[]);
        let indegree=new Array(numCourses).fill(0);
        for(let [u,v] of prerequisites){
         adj[v].push(u)
         indegree[u]++;
        }
        let queue=[];
        for(let i=0;i<indegree.length;i++){
            if(indegree[i]==0) queue.push(i);
        }
        let course_cnt=0;
        while(queue.length>0){
            const node = queue.shift();
            course_cnt++;
            for(let neighbour of adj[node]){
                indegree[neighbour]--;
                if(indegree[neighbour]==0) queue.push(neighbour);
            }
        }
        return course_cnt == numCourses;
    }
}
