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
        List<ListNode>arrayList = new ArrayList<>();
        ListNode curr = head;
        int length=0;
        while(curr!=null){
            arrayList.add(curr);
            length++;
            curr = curr.next;
        }
        int left=0, right=arrayList.size()-1;
        while(left<right){
            arrayList.get(left).next = arrayList.get(right);
            left++;

            if(left>=right) break;

            arrayList.get(right).next = arrayList.get(left);
            right--;
        }
        arrayList.get(left).next = null;
    }
}
