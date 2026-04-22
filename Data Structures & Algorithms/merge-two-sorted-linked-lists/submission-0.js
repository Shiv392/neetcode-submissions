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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(!list1 || !list2) return list2 || list1;
        let curr1=list1,curr2=list2;
        let anslist=new ListNode(),curr=anslist;
        while(curr1 && curr2){
            if(curr1.val<=curr2.val){
            curr.next=new ListNode(curr1.val);
            curr=curr.next;
            curr1=curr1.next;
            }
            else{
            curr.next=new ListNode(curr2.val);
            curr=curr.next;
            curr2=curr2.next;
            }
        }
        while(curr1){
            curr.next=new ListNode(curr1.val);
            curr=curr.next;
            curr1=curr1.next;
        }
        while(curr2){
            curr.next=new ListNode(curr2.val);
            curr=curr.next;
            curr2=curr2.next;
        }
        return anslist.next;
    }
}
