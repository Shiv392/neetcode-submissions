class ListNode{
    constructor(key,value){
        this.key=key;
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity=capacity;
        this.cache=new Map();

        this.head=new ListNode(0,0);
        this.tail=new ListNode(0,0);
        this.head.next=this.tail;
        this.tail.prev=this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) return -1;
        let most_recent_usednode=this.cache.get(key);
        this.moveToTail(most_recent_usednode);
        return most_recent_usednode.value;
    }

    moveToTail(node){
        //removing current node from the list---->
        this.removeNode(node);

        //adding current node at end of the list(before tail)------>
        this.addNode(node);
    }

    removeNode(node){
        node.prev.next=node.next;
        node.next.prev=node.prev;
    }

    addNode(node){
        node.prev=this.tail.prev;
        node.next=this.tail;
        this.tail.prev.next=node;
        this.tail.prev=node;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
        let most_recent_usednode=this.cache.get(key);
        most_recent_usednode.value=value;
        this.moveToTail(most_recent_usednode);
        }
        else{
         if(this.cache.size>=this.capacity){
            //get the least recent used node
            let least_recent_usednode=this.head.next;
            this.removeNode(least_recent_usednode);
            this.cache.delete(least_recent_usednode.key);
         }
         let newnode=new ListNode(key,value);
         this.cache.set(key,newnode);
         this.addNode(newnode);
        }
    }
}
