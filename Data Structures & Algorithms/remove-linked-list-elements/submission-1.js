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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        if(!head) return null;
while(head && head.val==val){
    head = head.next;
}
let curr=head, prev=null;
while(curr){
    if(curr.val==val){
     prev.next = curr.next || null;
    }
    else{
        prev=curr;
    }
    curr=curr.next;
}
return head;
    }
}


