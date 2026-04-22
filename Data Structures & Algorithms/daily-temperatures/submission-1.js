class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let length=temperatures.length, ans=new Array(length).fill(0);
        let stack=[];
        for(let i=0;i<length;i++){
            while(stack.length && temperatures[stack[stack.length-1]]<temperatures[i]){
                let index= stack.pop();
                ans[index] = i-index;
            }
            stack.push(i);
        }
        return ans;
    }
}
