class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let n=matrix.length,m=matrix[0].length;
        let left=0,right=m-1;
        while(left<n && right>=0){
            if(matrix[left][right]==target) return true;
            matrix[left][right]< target ? left++ : right--;
        }
        return false;
    }
}
