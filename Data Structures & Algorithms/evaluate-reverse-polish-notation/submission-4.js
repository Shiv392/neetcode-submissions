class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let length=tokens.length, stack=[];
        for(let i=0;i<length;i++){
            let char = tokens[i];
            if(!isNaN(char)){
                stack.push(parseInt(char));
            }
            else{
                let b=stack.pop();
                let a = stack.pop();
                switch(char){
                 case '+':
                 stack.push(a+b);
                 break;
                 case '-':
                 stack.push(a-b);
                 break;
                 case '*':
                 stack.push(a*b);
                 break;
                 case '/':
                 stack.push(Math.trunc(a/b));
                 break;
                 default : 
                 stack.push(0);
                }
            }
        }
        return stack[0];
    }
}
