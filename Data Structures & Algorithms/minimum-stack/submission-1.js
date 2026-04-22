class MinStack {
    constructor() {
        this.stack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
      this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.length==0 ? -1 : this.stack.pop();
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
        return Math.min(...this.stack);
    }
}
