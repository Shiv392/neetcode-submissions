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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        if(!l1 || !l2) return l2 || l1;
        const reverse = (head) =>{
            let curr=head, prev=null;
            while(curr){
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            return prev;
        }
        let rev_l1 = reverse(l1);
        let rev_l2 = reverse(l2);
        let ans_list = new ListNode(0), temp=ans_list;
        let curr1= rev_l1, curr2=rev_l2, carry=0;
        while(curr1 || curr2 || carry){
            let sum=carry;
            if(curr1){
                sum+=curr1.val;
                curr1=curr1.next;
            }
            if(curr2){
                sum+=curr2.val;
                curr2=curr2.next;
            }
            temp.next = new ListNode(Math.floor(sum%10));
            temp=temp.next;
            carry=Math.floor(sum/10);
        }
        return reverse(ans_list.next);
    }
}
