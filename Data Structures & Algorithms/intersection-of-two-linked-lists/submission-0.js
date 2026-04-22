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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        let curr1=headA, curr2=headB;
        while(curr1!=curr2){
            curr1 = !curr1 ? headB : curr1.next;
            curr2 = !curr2 ? headA : curr2.next;
        }
        return !curr1 ? null : curr1;
    }
}
