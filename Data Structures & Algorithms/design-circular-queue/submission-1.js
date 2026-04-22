class ListNode{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.head = null;
        this.tail = null;
        this.capacity = k;
        this.size = 0;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.isFull()) return false;
        let new_node = new ListNode(value);
        if(this.isEmpty()){
            this.head = this.tail = new_node;
            new_node.next = new_node;
        }
        else{
            new_node.next = this.head;
            this.tail.next = new_node;
            this.tail = new_node;
        }

        this.size++;
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(this.isEmpty()) return false;
        if(this.size==1){
            this.head = this.tail = null;
        }
        else{
            this.head = this.head.next;
            this.tail.next = this.head;
        }
        this.size--;
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        return this.isEmpty() ? -1 : this.head.val;
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.isEmpty() ? -1 : this.tail.val;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size == 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size == this.capacity;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
