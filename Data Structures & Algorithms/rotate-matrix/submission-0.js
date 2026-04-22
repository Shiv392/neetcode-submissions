class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let n=matrix.length,m=matrix[0].length;
        for(let row=0;row<n;row++){
            for(let col=row;col<m;col++){
                let temp=matrix[row][col];
                matrix[row][col]=matrix[col][row];
                matrix[col][row]=temp;
            }
        }
        for(let row of matrix){
            row.reverse();
        }
        return matrix;
    }
}
