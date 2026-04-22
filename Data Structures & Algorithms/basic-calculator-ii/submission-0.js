class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    calculate(s) {
        let length=s.length, stack=[];
        let num='', sign=null;
        for(let i=0;i<=length;i++){
            let char = s[i]
            if(char==' ') continue;
            if(!isNaN(char)) num+=char;
            if(isNaN(char)){
            num = Number(num);
            switch(sign){
                case '+':
                case null:
                stack.push(num);
                break;
                case '-':
                stack.push(-num);
                break;
                case '*':
                stack.push(stack.pop() * num);
                break;
                case '/':
                stack.push(parseInt(stack.pop()/num,10));
                break;
            }
            sign = char;
            num = '';
            }
        }
        return stack.reduce((acc,curr)=>acc+curr,0);
    }
}
