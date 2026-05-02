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
    public boolean isPalindrome(ListNode head) {
        if(head==null || head.next==null) return true;

        //using array list then compare from start and end of the list. 
        // List<Integer>arrayList = new ArrayList<>();
        // ListNode curr = head;
        // int length=0;
        // while(curr!=null){
        //     arrayList.add(curr.val);
        //     length++;
        //     curr = curr.next;
        // }
        // int left=0, right=length-1;
        // while(left<right){
        //     if(arrayList.get(left)!=arrayList.get(right)) return false;
        //     left++;
        //     right--;
        // }
        // return true;

        //using two pointer
        //1. find the middle node.
        //2. reverse from the middle node.
        //3. compare reversed list and actual list.
        if(head==null || head.next == null) return true;
        ListNode slow=head, fast=head, prev = null;
        while(fast!=null && fast.next!=null){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode midNode = slow;
        //break list from mid
        prev.next = null;

        //rev from midnode;
        ListNode revMidNode = null;
        while(midNode!=null){
            ListNode next = midNode.next;
            midNode.next = revMidNode;
            revMidNode = midNode;
            midNode = next;
        }

        //now we have head & revMidNode, so compare both of them
        while(head!=null && revMidNode!=null){
            if(head.val!=revMidNode.val) return false;
            head = head.next;
            revMidNode = revMidNode.next;
        }
        return true;
    }
}