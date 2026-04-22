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
        let str='', curr=head;
        while(curr){
            str+=curr.val;
            curr=curr.next;
        }
        let left=0, right=str.length-1;
        while(left<right){
            if(str[left]!=str[right]) return false;
            left++, right--;
        }
        return true;
    }
}
