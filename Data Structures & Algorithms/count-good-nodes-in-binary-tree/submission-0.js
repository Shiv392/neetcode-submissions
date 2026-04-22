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
     * @return {number}
     */
    goodNodes(root) {
        if(!root) return 0;
        let cnt=0;
        const dfs=(root,maxvalue)=>{
            if(!root) return;
            if(root.val>=maxvalue) cnt++;
            dfs(root.left,Math.max(maxvalue,root.val));
            dfs(root.right,Math.max(root.val,maxvalue));
        }
        dfs(root,root.val);
        return cnt;
    }
}
