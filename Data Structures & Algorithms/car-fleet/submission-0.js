class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let length=position.length, stack=[];
        let cars =[];
        for(let i=0;i<length;i++){
            cars.push([position[i], speed[i]]);
        }
        cars.sort((a,b)=> b[0]-a[0]);
        for(let i=0;i<length;i++){
            const [pos, spd] = cars[i];
            let time = (target-pos)/spd;
            if(stack.length==0 ||  time>stack[stack.length-1]){
                stack.push(time);
            }
        }
        return stack.length;
    }
}
