class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer>numStack = new Stack<>();
        for(String c : tokens){
            if(c.equals("+")){
                int a=numStack.pop(), b=numStack.pop();
                numStack.add(a+b);
            }
            else if(c.equals("-")){
                int a=numStack.pop(), b=numStack.pop();
                numStack.add(b-a);
            }
            else if(c.equals("*")){
                int a = numStack.pop(), b=numStack.pop();
                numStack.add(a*b);
            }
            else if(c.equals("/")){
                int a=numStack.pop(), b=numStack.pop();
                numStack.add(b/a);
            }
            else{
                numStack.add(Integer.parseInt(c));
            }
        }
        return numStack.peek();
    }
}
