/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        let ans=[],queue=[root];
        while(queue.length>0){
            let n=queue.length,rightnode=null;
            for(let i=0;i<n;i++){
                let node=queue.shift();
                if(node){
                    rightnode=node;
                    queue.push(node.left);
                    queue.push(node.right);
                }
            }
            if(rightnode) ans.push(rightnode.val);
        }
        return ans;
    }
}
