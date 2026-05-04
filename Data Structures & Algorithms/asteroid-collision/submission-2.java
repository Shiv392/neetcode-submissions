class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer>stack = new Stack<>();
        for(int num : asteroids){
           boolean is_destroyed = false;
           while(!stack.isEmpty() && num<0 && stack.peek()>0){
            int top = stack.peek();
            if(top< -num){
                stack.pop();
                continue;
            }
            else if(top == -num){
                stack.pop();
            }
            is_destroyed = true;
            break;
           }
           if(!is_destroyed){
            stack.add(num);
           }
        }
        //convert stack to array
        int[] ans = new int[stack.size()];
        for(int i=0;i<stack.size();i++){
            ans[i]=stack.get(i);
        }
        return ans;
    }
}