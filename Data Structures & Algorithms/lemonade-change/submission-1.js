class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let length=bills.length;
        let fivecnt=0,tencnt=0;
        for(let i=0;i<length;i++){
            if(bills[i]==5) fivecnt++;
            else if(bills[i]==10){
                if(fivecnt==0) return false;
                fivecnt--;
                tencnt++;
            }
            else{
               if(fivecnt>0 && tencnt>0){
                fivecnt--;
                tencnt--;
               }
               else if(fivecnt>=3){
                fivecnt-=3;
               }
               else return false;
            }
        }
        return true;
    }
}
