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
    public ListNode removeElements(ListNode head, int val) {
        if(head == null) return head;

        //removing target from start of the list.
        while(head!=null && head.val == val){
            head = head.next;
        }
        ListNode curr = head, prev=null;
        while(curr!=null){
            if(curr.val == val){
                if(curr.next!=null){
                    prev.next = curr.next;
                }
                else prev.next = null;
            }
            else prev = curr;
            curr = curr.next;
        }       
        return head;
    }
}