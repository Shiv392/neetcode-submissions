class Solution {
    public int countComponents(int n, int[][] edges) {
        boolean[]visited = new boolean[n];
        List<List<Integer>>adj = new ArrayList<>();
        int componentCnt = 0;
        
        for(int i=0;i<n;i++){
            adj.add(new ArrayList<>());
        }

        for(int[]edge : edges){
            int u=edge[0], v=edge[1];
            adj.get(u).add(v);
            adj.get(v).add(u);
        }

        for(int node=0; node<n; node++){
            if(!visited[node]){
                visited[node]=true;
                componentCnt++;
                dfs(node, adj, visited);
            }
        }
        return componentCnt;
    }
    private void dfs(int node, List<List<Integer>>adj, boolean[]visited){
        for(int neighbour : adj.get(node)){
            if(!visited[neighbour]){
                visited[neighbour]=true;
                dfs(neighbour, adj, visited);
            }
        }
    }
}
