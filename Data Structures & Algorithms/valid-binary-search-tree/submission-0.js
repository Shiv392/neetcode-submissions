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
     * @return {boolean}
     */
    isValidBST(root) {
        if(!root) return true;
        const dfs=(root,minValue,maxValue)=>{
            if(!root) return true;
            if(root.val<=minValue || root.val>=maxValue) return false;
            return dfs(root.left,minValue,root.val) && dfs(root.right,root.val,maxValue);
        }
        return dfs(root,-Infinity,Infinity);
    }
}
