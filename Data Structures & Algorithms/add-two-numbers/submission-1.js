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
        if(!l1 && !l2) return null;
        let carry=0,curr1=l1,curr2=l2;
        let anslist=new ListNode(),curr=anslist;
        while(curr1 || curr2){
            let sum=carry;
            if(curr1){
                sum+=curr1.val;
                curr1=curr1.next;
            }
            if(curr2){
                sum+=curr2.val;
                curr2=curr2.next;
            }
            carry=Math.floor(sum/10);
            curr.next=new ListNode(sum%10);
            curr=curr.next;
        }
        if(carry>0){
            curr.next=new ListNode(carry);
            curr=curr.next;
        }
        return anslist.next;
    }
}
