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
        if(!head) return false;
        let set=new Set(), curr=head;
        while(curr && curr.next){
            if(set.has(curr)) return true;
            set.add(curr);
            curr=curr.next;
        }
        return false;
    }
}
