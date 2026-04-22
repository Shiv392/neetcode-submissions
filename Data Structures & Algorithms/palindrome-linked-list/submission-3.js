/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head) {
        if(!head || !head.next) return true;
        // let str='', curr=head;
        // while(curr){
        //     str+=curr.val;
        //     curr=curr.next;
        // }
        // let left=0, right=str.length-1;
        // while(left<right){
        //     if(str[left]!=str[right]) return false;
        //     left++, right--;
        // }
        // return true;

        //here first divide the list from the middle
        //reverse the second half then compare one by one node
        let slow=head, fast=head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        let mid_node = slow;
        let prev = null, curr=mid_node;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        let rev_mid_node = prev;
        let curr1 = head, curr2=rev_mid_node;
        while(curr1 && curr2){
            if(curr1.val!=curr2.val) return false;
            curr1 = curr1.next;
            curr2 = curr2.next;
        }
        return true;
    }
}
