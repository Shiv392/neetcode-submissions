class NumMatrix {

    int[][]prefix;
    public NumMatrix(int[][] matrix) {
        int m=matrix.length, n=matrix[0].length;
        prefix = new int[m+1][n+1];

        for(int row=1; row<=m; row++){
            for(int col=1; col<=n; col++){
                prefix[row][col] = matrix[row-1][col-1] + prefix[row-1][col] 
                + prefix[row][col-1] - prefix[row-1][col-1];
            }
        }
    }
    
    public int sumRegion(int row1, int col1, int row2, int col2) {
        int r1=row1+1, c1=col1+1, r2=row2+1, c2=col2+1;
        return prefix[r2][c2] - prefix[r1-1][c2] - prefix[r2][c1-1] + prefix[r1-1][c1-1];
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * int param_1 = obj.sumRegion(row1,col1,row2,col2);
 */