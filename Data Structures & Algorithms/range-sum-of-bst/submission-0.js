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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        if(!root) return 0;
        let sum=0;
        const dfs = (root)=>{
            if(!root) return;
            if(root.val>=low && root.val<=high) sum+=root.val;
            dfs(root.left);
            dfs(root.right);
        }
        dfs(root);
        return sum;
    }
}
