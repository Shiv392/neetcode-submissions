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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let stack=[];
        for(let list of lists){
            let curr=list;
            while(curr){
                stack.push(curr.val);
                curr=curr.next;
            }
        }
        stack.sort((a,b)=>a-b);
        let anslist=new ListNode(),temp=anslist;
        for(let i=0;i<stack.length;i++){
            temp.next=new ListNode(stack[i]);
            temp=temp.next;
        }
        return anslist.next;
    }
}
