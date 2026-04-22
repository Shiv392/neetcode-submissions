class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left=1,right=Math.max(...piles);
        const countHours=(hour)=>{
            let hoursneeded=0;
            for(let pile of piles){
                hoursneeded+=Math.ceil(pile/hour);
            }
            return hoursneeded;
        }
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            const hour=countHours(mid);
            if(hour>h) left=mid+1;
            else right=mid-1;
        }
        return left;
    }
}
