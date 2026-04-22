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
        // let set=new Set(),curr=head;
        // while(curr){
        //     if(set.has(curr)) return true;
        //     set.add(curr);
        //     curr=curr.next;
        // }
        // return false;

        //using two pointer 
        let slow=head,fast=head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
            if(slow==fast) return true;
        }
        return false;
    }
}
