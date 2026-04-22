class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let person_set = new Set(), judge_map = new Map();
        for(let [person, judge] of trust){
           judge_map.set(judge, judge_map.get(judge)+1||1);
           person_set.add(person);
        } 
        for(let i=1;i<=n;i++){
            if(judge_map.has(i) && !person_set.has(i) && judge_map.get(i)==person_set.size){
                return i;
            }
        }
        return -1;
    }
}
