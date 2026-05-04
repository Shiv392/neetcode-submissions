class Solution {
    public boolean isValid(String s) {
        Set<Character>openSet = Set.of('[','{','(');
        Stack<Character>stack = new Stack<>();
        for(char c : s.toCharArray()){
            if(openSet.contains(c)){
                stack.add(c);
            }
            else{
                if(stack.size()==0) return false;
                char top = stack.peek();
                if((top=='[' && c ==']') || (top=='{' && c=='}') || (top=='(' && c==')')){
                    stack.pop();
                }
                else return false;
            }
        }
        if(stack.size()==0) return true;
        else return false;
    }
}
