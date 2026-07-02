class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m=obstacleGrid.length, n=obstacleGrid[0].length;
        int[][]dp = new int[m][n];

        //filling first rows and columns
        for(int col=0; col<n; col++){
            if(obstacleGrid[0][col]==0) dp[0][col]=1;
            else break;
        }
        for(int row=0; row<m; row++){
            if(obstacleGrid[row][0]==0) dp[row][0]=1;
            else break;
        }

        for(int row=1; row<m; row++){
            for(int col=1; col<n; col++){
                if(obstacleGrid[row][col]==0){
                    dp[row][col] = dp[row-1][col]+dp[row][col-1];
                }
            }
        }
        return dp[m-1][n-1];
    }
}