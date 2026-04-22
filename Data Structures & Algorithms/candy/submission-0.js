class Solution {
    /**
     * @param {number[]} ratings
     * @return {number}
     */
    candy(ratings) {
        let length=ratings.length;
        let candies=new Array(length).fill(1);
        for(let i=1;i<length;i++){
            if(ratings[i] > ratings[i-1]){
                candies[i] = candies[i-1]+1;
            }
        }
        for(let i=length-2;i>=0;i--){
            if(ratings[i]>ratings[i+1]){
                candies[i] = Math.max(candies[i], candies[i+1]+1);
            }
        }
        return candies.reduce((acc,curr)=>acc+curr,0);
    }
}
