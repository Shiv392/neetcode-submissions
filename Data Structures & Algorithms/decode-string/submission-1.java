class Solution {
    public String decodeString(String s) {
        StringBuilder sb = new StringBuilder();
        Stack<Integer>numStack = new Stack<>();
        Stack<String>stringStack = new Stack<>();
        int num=0;
        for(char c : s.toCharArray()){
            if(Character.isDigit(c)){
                num = num*10+(c-'0');
            }
            else if(c=='['){
                numStack.add(num);
                num = 0;
                stringStack.add(sb.toString());
                sb = new StringBuilder();
            }
            else if(c==']'){
                int numCount = numStack.pop();
                String lastString = sb.toString();
                sb = new StringBuilder(stringStack.pop());
                for(int i=0;i<numCount;i++){
                    sb.append(lastString);
                }
            }
            else{
                sb.append(c);
            }
        }
        return sb.toString();
    }
}