class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let n=s.length,stack=[];
        for(let i=0;i<n;i++){
            if(s[i]=='(' || s[i]=='[' || s[i]=='{'){
                stack.push(s[i]);
            }
            else{
                let top=stack[stack.length-1];
                if(top=='(' && s[i]==')' || top=='[' && s[i]==']' || top=='{' && s[i]=='}'){
                    stack.pop();
                }
                else stack.push(s[i]);
            }
        }
        return stack.length==0;
    }
}
