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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // Convert tree to string using preorder traversal with null markers;
        // const serialize=(root)=>{
        //     if(!root) return '#';
        //     return `${root.val}+${serialize(root.left)}+${serialize(root.right)}`;
        // }
        // const str1=serialize(root);
        // const str2=serialize(subRoot);
        // return str1.includes(str2);

                if (!root) return false;

        const isSameTree = (s, t) => {
            if (!s && !t) return true;
            if (!s || !t || s.val !== t.val) return false;
            return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
        }

        if (isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
