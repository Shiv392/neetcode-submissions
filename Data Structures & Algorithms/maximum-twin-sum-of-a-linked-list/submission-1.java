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
    public int pairSum(ListNode head) {
        //using arrayList
        // List<Integer>arrayList = new ArrayList<>();
        // ListNode curr = head;
        // while(curr!=null){
        //     arrayList.add(curr.val);
        //     curr = curr.next;
        // }
        // int left=0, right=arrayList.size()-1;
        // int maxSum = Integer.MIN_VALUE;
        // while(left<right){
        //     maxSum = Math.max(maxSum, arrayList.get(left)+arrayList.get(right));
        //     left++;
        //     right--;
        // }
        // return maxSum;

        //using constant space
        //1. get the mid node
        //2. reverse from the mid node
        //3. compare first list and revresed mid list
        ListNode slow=head, fast=head;
        while(fast!=null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode midNode = slow;
        ListNode prev = null;
        while(midNode!=null){
            ListNode next = midNode.next;
            midNode.next = prev;
            prev = midNode;
            midNode = next;
        }

        ListNode first = head, second = prev;
        int maxSum = Integer.MIN_VALUE;
        while(second!=null){
            maxSum = Math.max(maxSum, (first.val+second.val));
            first = first.next;
            second = second.next;
        }
        return maxSum;
    }
}