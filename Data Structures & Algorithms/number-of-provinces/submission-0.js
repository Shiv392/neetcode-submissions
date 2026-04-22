class Solution {
    /**
     * @param {number[][]} isConnected
     * @return {number}
     */
    findCircleNum(isConnected) {
        let V=isConnected.length;
        let visited=new Array(V).fill(false);
        let cnt=0;
        const dfs = (node)=>{
            visited[node]=true;

            for(let j=0;j<V;j++){
            //if there is a connection and not visited yet
            if(isConnected[node][j]==1 && !visited[j]){
                dfs(j);
            }
            }
        }
        for(let i=0;i<V;i++){
            if(!visited[i]){
                cnt++;
                dfs(i);
            }
        }
        return cnt;
    }
}
