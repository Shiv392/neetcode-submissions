class Solution {
    public String decodeString(String s) {
        Stack<Integer>numStack = new Stack<>();
        Stack<String>stringStack = new Stack<>();
        int num =0;
        StringBuilder sb = new StringBuilder();
        for(char c : s.toCharArray()){
            if(Character.isDigit(c)){
                num = num*10+(c-'0');
            }
            else if(c == '['){
                numStack.add(num);
                num = 0;
                stringStack.add(sb.toString());
                sb = new StringBuilder();
            }
            else if(c==']'){
                int lastNum = numStack.pop();
                String temp = sb.toString();
                sb = new StringBuilder(stringStack.pop());
                for(int i=0;i<lastNum;i++){
                    sb.append(temp);
                }

            }
            else{
                sb.append(c);
            }
        }
        return sb.toString();
    }
}