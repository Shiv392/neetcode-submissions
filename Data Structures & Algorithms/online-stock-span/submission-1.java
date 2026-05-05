class SpanPair{
    int price;
    int span;

    SpanPair(int price, int span){
        this.price = price;
        this.span = span;
    }
}
class StockSpanner {

    Stack<SpanPair>spanStack;
    public StockSpanner() {
        spanStack = new Stack<>();
    }
    
    public int next(int price) {
        int span = 1;
        while(spanStack.size()>0 && spanStack.peek().price<=price){
            span+=spanStack.pop().span;
        }
        spanStack.add(new SpanPair(price, span));
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.next(price);
 */