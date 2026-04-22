class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let n=matrix.length,m=matrix[0].length;
        const setZero=(row,col)=>{
            for(let i=0;i<m;i++){
                matrix[row][i]=0;
            }
            for(let i=0;i<n;i++){
                matrix[i][col]=0;
            }
        }
        let x=[],y=[];
        for(let row=0;row<n;row++){
            for(let col=0;col<m;col++){
                if(matrix[row][col]==0){
                    x.push(row);
                    y.push(col);
                }
            }
        }
        for(let i=0;i<x.length;i++){
            setZero(x[i],y[i]);
        }
        return matrix;
    }
}
