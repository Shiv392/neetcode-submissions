class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min_speed=1, max_speed=Math.max(...piles);
        const get_hours = (speed)=>{
    let time=0;
    for(let pile of piles){
        time+=Math.ceil(pile/speed);
    }
    return time;
    }
   while(min_speed<=max_speed){
    let speed = Math.floor((min_speed+max_speed)/2);
    const curr_hours = get_hours(speed);
    if(curr_hours>h) min_speed = speed+1;
    else max_speed = speed-1;
   }
   return min_speed;
    }
}


