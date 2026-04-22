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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //approac 1 
        // if(!head) return head;
        // let len=0,curr=head;
        // while(curr){
        //     len++;
        //     curr=curr.next;
        // }
        // let index=len-n;
        // if(index==0) return head.next;
        // curr=head;
        // for(let i=1;i<index;i++){
        //     curr=curr.next;
        // }
        // curr.next=curr.next.next || null;
        // return head;

        //solution 2
        if(!head) return head;
        let slow=head,fast=head;
        while(n>0){
            fast=fast.next;
            n--;
        }
        if(!fast) return head.next;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next;
        }
        slow.next=slow.next.next;
        return head;
    }
}
