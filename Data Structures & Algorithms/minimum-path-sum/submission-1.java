class Solution {
    int MinPathSum=Integer.MAX_VALUE;
    public int minPathSum(int[][] grid) {
        //1. using recursion and brute force
        // dfs(0, 0,0, grid);
        // return MinPathSum;

        //2. using memoization
        int m=grid.length, n=grid[0].length;
        int[][]dp = new int[m][n];
        for(int row=0; row<m; row++){
            Arrays.fill(dp[row], -1);
        }

        return memoizedDFS(m-1, n-1, grid, dp);
    }
    // private void dfs(int row, int col, int sum, int[][]grid){
    //     if(row<0 || col<0 || row>=grid.length || col>=grid[0].length) return;

    //     sum+=grid[row][col];
    //     if(row == grid.length-1 && col == grid[0].length-1){
    //         MinPathSum = Math.min(MinPathSum, sum);
    //         return;
    //     }

    //     dfs(row, col+1, sum, grid);
    //     dfs(row+1, col, sum, grid);
    // }

    private int memoizedDFS(int row, int col, int[][]grid, int[][]dp){
        if(row<0 || col<0 || row>=grid.length || col>=grid[0].length) return Integer.MAX_VALUE;

        if(row == 0 && col == 0) return grid[row][col];
        if(dp[row][col]!=-1) return dp[row][col];
        
        int left = memoizedDFS(row, col-1, grid, dp);
        int up = memoizedDFS(row-1, col, grid, dp);

        dp[row][col] = grid[row][col]+Math.min(left, up);
        return dp[row][col];
    }
}