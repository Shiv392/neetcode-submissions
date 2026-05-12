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
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer>ansList = new ArrayList<>();
        Stack<TreeNode>stack = new Stack<>();

        while(!stack.isEmpty() || root!=null){
            if(root!=null){
                ansList.add(root.val);
                stack.add(root);
                root = root.right;
            }
            else{
                root = stack.pop();
                root = root.left;
            }
        }
        Collections.reverse(ansList);
        return ansList;
    }
}