class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let n=strs.length,map=new Map();
        for(let i=0;i<n;i++){
            let word=strs[i].split('').sort().join('');
            if(!map.has(word)) map.set(word,[strs[i]]);
            else map.get(word).push(strs[i]);
        }
        return [...map.values()];
    }
}
