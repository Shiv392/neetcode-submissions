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
        // Convert tree to string using preorder traversal with null markers
        const serialize = (node) => {
            if (!node) return '#'; // null marker
            return `${node.val},${serialize(node.left)},${serialize(node.right)}`;
        };

        const rootStr = serialize(root);
        const subRootStr = serialize(subRoot);

        return rootStr.includes(subRootStr);
    }
}
