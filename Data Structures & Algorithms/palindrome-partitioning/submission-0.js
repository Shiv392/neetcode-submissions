class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let length=s.length,ans=[];
        const isPalindrom=(str)=>{
            let left=0,right=str.length-1;
            while(left<right){
                if(str[left]!=str[right]) return false;
                left++,right--;
            }
            return true;
        }
        const dfs=(arr,startindex)=>{
            if(startindex==length){
                ans.push([...arr]);
                return;
            }
            for(let endindex=startindex+1;endindex<=length;endindex++){
                let substr=s.substring(startindex,endindex);
                if(isPalindrom(substr)){
                    arr.push(substr);

                    dfs(arr,endindex);
                    arr.pop();
                }
            }
        }
        dfs([],0);
        return ans;
    }
}
