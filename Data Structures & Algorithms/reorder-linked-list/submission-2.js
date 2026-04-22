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
        if(!head || !head.next) return head;
        let nodes =[], curr=head;
        while(curr){
            nodes.push(curr);
            curr=curr.next;
        }
        let left=0, right=nodes.length-1;
        while(left<right){
            nodes[left].next = nodes[right];
            left++;
            nodes[right].next = nodes[left];
            right--;
        }
        nodes[left].next = null;
    }
}
