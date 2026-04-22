/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        //1. using set
        // if(!head) return false;
        // let set=new Set(), curr=head;
        // while(curr && curr.next){
        //     if(set.has(curr)) return true;
        //     set.add(curr);
        //     curr=curr.next;
        // }
        // return false;

        //using two pointer 
        if(!head) return false;
        let slow=head, fast=head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
            if(slow==fast) return true;
        }
        return false;
    }
}
