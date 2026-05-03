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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
         if(l1==null) return l2;
         if(l2==null) return l1;

         ListNode revList1= reverseList(l1);
         ListNode revList2= reverseList(l2);

         ListNode ansList=new ListNode(-1), temp=ansList;
         int carry=0;
         while(revList1!=null || revList2!=null || carry>0){
            int sum=carry;
            if(revList1!=null){
                sum+=revList1.val;
                revList1=revList1.next;
            }
            if(revList2!=null){
                sum+=revList2.val;
                revList2=revList2.next;
            }
            temp.next = new ListNode(sum%10);
            temp=temp.next;

            carry = sum/10;
         }
         return reverseList(ansList.next);
    }

    public static ListNode reverseList(ListNode head){
        ListNode prev =null, curr=head;
        while(curr!=null){
            ListNode next = curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        return prev;
    }
}