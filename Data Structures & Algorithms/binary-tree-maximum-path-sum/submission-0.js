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
    maxPathSum(root) {
        let maxpathsum=-Infinity;
        const dfs=(root)=>{
          if(!root) return 0;
          let left=dfs(root.left);
          let right=dfs(root.right);
          let currpathsum=Math.max(root.val,root.val+left,root.val+right);
          maxpathsum=Math.max(maxpathsum,root.val+left+right,currpathsum);
          return currpathsum;
        }
        dfs(root);
        return maxpathsum;
    }
}
