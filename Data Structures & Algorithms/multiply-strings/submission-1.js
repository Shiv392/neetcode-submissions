class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if(num1=='0' || num2=='0') return '0';
        let n=num1.length,m=num2.length;
        let dp=new Array(n+m).fill(0);
        for(let i=n-1;i>=0;i--){
            for(let j=m-1;j>=0;j--){
                let numindex=i+j+1,carryindex=i+j;
                let currsum=dp[numindex]+(Number(num1[i])*Number(num2[j]));
                dp[numindex]=currsum%10;
                dp[carryindex]+=Math.floor(currsum/10);
            }
        }
        if(dp[0]=='0') dp.shift();
        return dp.join('')
    }
}
