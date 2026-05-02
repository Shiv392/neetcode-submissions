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
    public void reorderList(ListNode head) {
        //use arrayList
        // List<ListNode>arrayList = new ArrayList<>();
        // ListNode curr = head;
        // int length=0;
        // while(curr!=null){
        //     arrayList.add(curr);
        //     length++;
        //     curr = curr.next;
        // }
        // int left=0, right=arrayList.size()-1;
        // while(left<right){
        //     arrayList.get(left).next = arrayList.get(right);
        //     left++;

        //     if(left>=right) break;

        //     arrayList.get(right).next = arrayList.get(left);
        //     right--;
        // }
        // arrayList.get(left).next = null;

        //using constant space
        //1. get the middle list
        //2. revere the second half of the list
        //3. now merge list1 & second half of the list alternativly
        ListNode slow=head, fast=head;
        while(fast!=null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode second = slow.next;
        ListNode prev = slow.next = null; //breaking the list from middle;
        while(second!=null){
            ListNode tempNext = second.next;
            second.next = prev;
            prev = second;
            second = tempNext;
        }
        
        ListNode first = head;
        second = prev;
        while(second!=null){
            ListNode firstNext = first.next;
            ListNode secondNext = second.next;
            first.next = second;
            second.next = firstNext;
            first = firstNext;
            second = secondNext;
        }

    }
}
