class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let n=matrix.length,m=matrix[0].length;
        let t=n*m,left=0,right=t-1;
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            let midvalue=matrix[Math.floor(mid/m)][mid%m];
            if(midvalue==target) return true;
            midvalue < target ? left=mid+1 : right=mid-1;
        }
        return false;
    }
}
