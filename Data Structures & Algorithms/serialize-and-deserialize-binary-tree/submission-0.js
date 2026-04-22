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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(!root) return [];
        let arr=[];
        const dfs=(root)=>{
            if(!root){
                arr.push(null);
                return;
            }
            arr.push(root.val);
            dfs(root.left);
            dfs(root.right);
        }
        dfs(root);
        return arr;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(data.length<=0) return null;
        let value=data.shift();
        if(value==null) return null;
        let root=new TreeNode(value);
        root.left=this.deserialize(data);
        root.right=this.deserialize(data);
        return root;
    }
}
