class Solution {
    /**
     * @param {number} num
     * @return {boolean}
     */
    isPerfectSquare(num) {
        //uisng linear search
        // for(let i=0;i<=num;i++){
        //     if(i**2==num) return true;
        // }
        // return false;

        //using binary search
        let left=0, right=num;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            let square = mid**2;
            if(square == num) return true;
            square < num ? left = mid+1 : right = mid-1;
        }
        return false;
    }
}
