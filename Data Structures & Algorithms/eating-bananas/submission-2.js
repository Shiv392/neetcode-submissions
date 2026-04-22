class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const getHours=(speed)=>{
            let hour=0,n=piles.length;
            for(let i=0;i<n;i++){
                hour+=Math.ceil(piles[i]/speed);
            }
            return hour;
        }
        let minspeed=1,maxspeed=Math.max(...piles);
        let left=minspeed,right=maxspeed;
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            const currhours=getHours(mid);
            if(currhours>h) left=mid+1;
            else right=mid-1;
        }
        return left;
    }
}
