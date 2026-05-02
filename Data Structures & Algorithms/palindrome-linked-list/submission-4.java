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
        List<Integer>arrayList = new ArrayList<>();
        ListNode curr = head;
        int length=0;
        while(curr!=null){
            arrayList.add(curr.val);
            length++;
            curr = curr.next;
        }
        int left=0, right=length-1;
        while(left<right){
            if(arrayList.get(left)!=arrayList.get(right)) return false;
            left++;
            right--;
        }
        return true;
    }
}