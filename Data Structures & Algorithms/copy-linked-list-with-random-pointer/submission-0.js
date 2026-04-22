// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        //first copy the list with next 
        let curr=head;
        while(curr){
            let copy_node = new Node(curr.val);
            copy_node.next = curr.next;
            curr.next = copy_node;
            curr = copy_node.next;
        }

        //now assign their random pointers
        curr = head;
        while(curr){
            if(curr.random){
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }

        //now break copy list from the original list---->
        curr = head;
        let new_head = head.next;
        while(curr){
            let copy_node = curr.next;
            curr.next = copy_node.next;
            copy_node.next = curr.next ? curr.next.next : null;
            curr = curr.next;
        }
        return new_head;
    }
}
