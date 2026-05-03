/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        // if(head==null) return head;
        // int length=0;
        // ListNode curr=head;
        // while(curr!=null){
        //     length++;
        //     curr=curr.next;
        // }
        // int index = length-n;
        // if(index == 0) return head.next;

        // curr=head;
        // for(int i=1;i<index;i++){
        //     curr=curr.next;
        // }
        // if(curr.next!=null){
        //     curr.next = curr.next.next;
        // }
        // else curr.next = null;
        // return head;

        //using slow & fast pointer
        if(head==null) return head;
        ListNode slow=head, fast=head;
        for(int i=0;i<n;i++){
            fast = fast.next;
        }

        if(fast == null) return head.next;
        while(fast!=null && fast.next!=null){
            slow= slow.next;
            fast= fast.next;
        }
        if(slow.next!=null){
            slow.next = slow.next.next;
        }
        else slow.next=null;
        return head;
    }
}
