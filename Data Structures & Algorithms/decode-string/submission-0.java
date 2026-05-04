class Solution {
    public String decodeString(String s) {
        Stack<Integer>numStack = new Stack<>();
        Stack<String>stringStack = new Stack<>();
        int num=0;
        StringBuilder curr = new StringBuilder();
        for(char c : s.toCharArray()){
            if(Character.isDigit(c)){
                num = num*10+(c-'0');
            }
            else if(c=='['){
                numStack.add(num);
                num=0;
                stringStack.add(curr.toString());
                curr=new StringBuilder();
            }
            else if(c==']'){
                String temp = curr.toString();
                curr = new StringBuilder(stringStack.pop());
                int count = numStack.pop();
                for(int i=0;i<count;i++){
                    curr.append(temp);
                }
            }
            else{
                curr.append(c);
            }
        }
        return curr.toString();
    }
}