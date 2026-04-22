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
     * @return {ListNode}
     */
    plusOne(head) {
        if(!head) return null;
        const reverse = (head)=>{
            let curr=head, prev=null;
            while(curr){
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            return prev;
        }
        let rev_list = reverse(head);
        let ans_list = new ListNode(), temp=ans_list;
        let curr = rev_list, carry=1;
        while(curr){
        let sum = carry+curr.val;
        temp.next = new ListNode(sum%10);
        temp = temp.next;
        carry = Math.floor(sum/10);
        curr = curr.next;
        }
        if(carry>0){
            temp.next = new ListNode(carry);
            temp = temp.next;
        }
        return reverse(ans_list.next)
    }
}
