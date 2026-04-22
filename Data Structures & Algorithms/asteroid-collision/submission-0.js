class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let length=asteroids.length, stack=[], index=0;
        while(index<length){
            while(stack.length && stack[stack.length-1]>0 && asteroids[index]<0){
                let a = stack[stack.length-1];
                let b = Math.abs(asteroids[index]);
                if(a==b){
                    //remove the last and move to next element
                    stack.pop();
                    index++;
                }
                else if(a<b){
                    //remove the last
                    stack.pop();
                }
                else{
                    //move to the next
                    index++;
                }
            }
            if(index<length) stack.push(asteroids[index]);
            index++;
        }
        return stack;
    }
}
