class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const count=(num)=>{
            let cnt=0;
            while(num>0){
                if(num&1) cnt++;
                num>>=1;
            }
            return cnt;
        }
        let ans=new Array(n+1).fill(0);
        for(let i=0;i<=n;i++){
          ans[i]=count(i);
        }
        return ans;
    }
}
