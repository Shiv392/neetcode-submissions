/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
}
*/

class Solution {
    public List<Integer> postorder(Node root) {
        List<Integer>ansList = new LinkedList<>();
        if(root == null) return ansList;
        Stack<Node>stack = new Stack<>();
        stack.add(root);
        while(!stack.isEmpty()){
            Node node = stack.pop();
            ansList.addFirst(node.val);
            for(Node child : node.children){
                stack.add(child);
            }
        }
        return ansList;
    }
}