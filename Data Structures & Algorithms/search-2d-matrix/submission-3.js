class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m=matrix.length, n=matrix[0].length;
        let left=0, right=m*n-1;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            let row = Math.floor(mid/n);
            let col = mid%n;
            let num = matrix[row][col];
            if(num==target) return true;
            num < target ? left = mid+1 : right=mid-1;
        }
        return false;
    }
}
