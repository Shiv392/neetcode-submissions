class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let left=0,top=0,right=matrix[0].length-1,bottom=matrix.length-1;
        let ans=[],direction='right';
        while(left<=right && top<=bottom){
            if(direction=='right'){
                for(let i=left;i<=right;i++){
                    ans.push(matrix[top][i]);
                }
                direction='down';
                top++;
            }
            else if(direction=='down'){
                for(let i=top;i<=bottom;i++){
                    ans.push(matrix[i][right]);
                }
                direction='left';
                right--;
            }
            else if(direction=='left'){
                for(let i=right;i>=left;i--){
                    ans.push(matrix[bottom][i]);
                }
                direction='up';
                bottom--;
            }
            else if(direction=='up'){
                for(let i=bottom;i>=top;i--){
                    ans.push(matrix[i][left]);
                }
                left++;
                direction='right';
            }
        }
        return ans;
    }
}
