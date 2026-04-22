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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(preorder.length==0 || inorder.length==0) return null;
        let rootvalue=preorder[0];
        let rootindex=inorder.indexOf(rootvalue);
        let root=new TreeNode(rootvalue);
        root.left=this.buildTree(preorder.slice(1,rootindex+1),inorder.slice(0,rootindex));
        root.right=this.buildTree(preorder.slice(rootindex+1),inorder.slice(rootindex+1));
        return root;
    }
}
