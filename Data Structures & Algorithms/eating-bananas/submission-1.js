class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left=1,right=Math.max(...piles);
        const countHours=(hour)=>{
            let totalhour=0,n=piles.length;
            for(let pile of piles){
                totalhour+=Math.ceil(pile/hour);
            }
            return totalhour;
        }
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            const hours=countHours(mid);
            if(hours>h) left=mid+1;
            else right=mid-1;
        }
        return left;
    }
}
