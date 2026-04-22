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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let stack=[], ans_list = new ListNode(-1), temp = ans_list;
        while(head){
            for(let i=0;i<k && head;i++){
                stack.push(head);
                head = head.next;
            }
            if(stack.length==k){
                while(stack.length>0){
                    temp.next = stack.pop();
                    temp = temp.next;
                }
                temp.next = head;
            }
        }
        return ans_list.next;
    }
}
