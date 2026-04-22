class FreqStack {
    constructor() {
        this.freq_map = new Map();
        this.group_map = new Map();
        this.max_freq = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let freq = this.freq_map.get(val) || 0;
        freq++;
        this.freq_map.set(val, freq);
        this.max_freq = Math.max(this.max_freq, freq);

        if(!this.group_map.has(freq)){
            this.group_map.set(freq,[]);
        }
        this.group_map.get(freq).push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        const stack = this.group_map.get(this.max_freq);
        const most_frequent = stack.pop();
        this.freq_map.set(most_frequent, this.freq_map.get(most_frequent)-1);

        if(stack.length==0){
            this.group_map.delete(this.max_freq);
            this.max_freq--;
        }
        return most_frequent;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
