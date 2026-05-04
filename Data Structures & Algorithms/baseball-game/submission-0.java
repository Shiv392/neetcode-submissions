class Solution {
    public int calPoints(String[] operations) {
        Stack<Integer>stack = new Stack<>();
        for(String c : operations){
            if(c.equals("+")){
                int peek1=stack.pop();
                int peek2=stack.pop();
                stack.add(peek2);
                stack.add(peek1);
                stack.add(peek1+peek2);
            }
            else if(c.equals("C")){
                stack.pop();
            }
            else if(c.equals("D")){
                stack.add(stack.peek()*2);
            }
            else{
                stack.add(Integer.parseInt(c));
            }
        }
        return stack.stream().reduce(0,(a,b)->a+b);
    }
}