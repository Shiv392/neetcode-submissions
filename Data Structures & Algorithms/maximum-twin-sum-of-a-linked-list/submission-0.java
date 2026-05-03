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
        List<Integer>arrayList = new ArrayList<>();
        ListNode curr = head;
        while(curr!=null){
            arrayList.add(curr.val);
            curr = curr.next;
        }
        int left=0, right=arrayList.size()-1;
        int maxSum = Integer.MIN_VALUE;
        while(left<right){
            maxSum = Math.max(maxSum, arrayList.get(left)+arrayList.get(right));
            left++;
            right--;
        }
        return maxSum;
    }
}