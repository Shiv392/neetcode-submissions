class MinStack {
    Stack<Integer>stack;
    Stack<Integer>minStack;

    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }
    
    public void push(int val) {
        stack.add(val);
        if(minStack.size()==0) minStack.add(val);
        else{
            int min = Math.min(val, minStack.peek());
            minStack.add(min);
        }
    }
    
    public void pop() {
        stack.pop();
        minStack.pop();
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
}
