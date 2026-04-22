class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n=temperatures.length,stack=[];
        let ans=new Array(n).fill(0);
        for(let i=0;i<n;i++){
            while(stack.length && temperatures[stack[stack.length-1]]<temperatures[i]){
                let lastindex=stack.pop();
                ans[lastindex]=i-lastindex;
            }
            stack.push(i);
        }
        return ans;
    }
}
