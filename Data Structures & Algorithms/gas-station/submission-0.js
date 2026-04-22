class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let n=gas.length,totalcost=0,totalgas=0;
        let tank=0,startindex=0;
        for(let i=0;i<n;i++){
            totalcost+=cost[i];
            totalgas+=gas[i];
            tank+=gas[i]-cost[i];
            if(tank<0){
                startindex=i+1;
                tank=0;
            }
        }
        return totalgas<totalcost ? -1 : startindex;
    }
}
