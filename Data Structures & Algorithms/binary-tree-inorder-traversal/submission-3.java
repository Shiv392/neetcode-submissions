/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        //iterative solution------->
        Stack<TreeNode>stack = new Stack<>();
        List<Integer>list = new ArrayList<>();
        while(!stack.isEmpty() || root!=null){
            while(root!=null){
                stack.add(root);
                root = root.left;
            }

            TreeNode top = stack.pop();
            list.add(top.val);

            if(top.right!=null){
                root = top.right;
            }
        }
        return list;
    }
}