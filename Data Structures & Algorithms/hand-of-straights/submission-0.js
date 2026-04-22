class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        //using sorting
        let length=hand.length,map=new Map();
        for(let i=0;i<length;i++){
            map.set(hand[i],map.get(hand[i])+1||1);
        }
        hand.sort((a,b)=>a-b);
        for(let num of hand){
            if(map.get(num)>0){
                for(let i=num;i<num+groupSize;i++){
                    if(!map.has(i)) return false;
                    map.set(i,map.get(i)-1);
                    if(map.get(i)==0) map.delete(i);
                }
            }
        }
        return true;
    }
}
