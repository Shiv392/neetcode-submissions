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
    public List<Integer> preorderTraversal(TreeNode root) {
     List<Integer>ansList = new ArrayList<>();
     if(root == null) return ansList;
     Stack<TreeNode>stack = new Stack<>();
     stack.add(root);
     while(!stack.isEmpty()){
        TreeNode top = stack.pop();
        ansList.add(top.val);
        if(top.right!=null) stack.add(top.right);
        if(top.left!=null) stack.add(top.left);
     }
     return ansList;   
    }
}