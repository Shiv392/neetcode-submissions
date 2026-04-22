class MinStack {
    constructor() {
        this.stack=[];
        this.minstack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minstack.length==0){
            this.minstack.push(val);
        }
        else{
            let minvalue=Math.min(val,this.minstack[this.minstack.length-1]);
            this.minstack.push(minvalue);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minstack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.length==0 ? -1 : this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minstack.length==0 ? -1 : this.minstack[this.minstack.length-1];
    }
}
