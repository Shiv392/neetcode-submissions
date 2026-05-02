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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if(list1 == null) return list2;
        if(list2 == null) return list1;

        ListNode curr1=list1;
        ListNode curr2=list2;
        ListNode ansList = new ListNode(0);
        ListNode temp = ansList;
        while(curr1!=null && curr2!=null){
            if(curr1.val<=curr2.val){
                temp.next = new ListNode(curr1.val);
                temp = temp.next;
                curr1= curr1.next;
            }
            else{
                temp.next = new ListNode(curr2.val);
                temp = temp.next;
                curr2=curr2.next;
            }
        }
        while(curr1!=null){
            temp.next = new ListNode(curr1.val);
            temp = temp.next;
            curr1 = curr1.next;
        }
        while(curr2!=null){
            temp.next = new ListNode(curr2.val);
            temp = temp.next;
            curr2 = curr2.next;
        }
        return ansList.next;
    }
}