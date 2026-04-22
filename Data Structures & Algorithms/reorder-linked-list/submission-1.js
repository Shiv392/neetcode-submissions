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
     * @return {void}
     */
    reorderList(head) {
        if(!head) return null;
        let nodes=[],curr=head;
        while(curr){
            nodes.push(curr);
            curr=curr.next;
        }
        let i=0,j=nodes.length-1;
        while(i<j){
            nodes[i].next=nodes[j];
            i++;
            nodes[j].next=nodes[i];
            j--;
        }
        nodes[i].next=null;
    }
}
