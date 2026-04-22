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
     * @return {number[][]}
     */
    verticalOrder(root) {
        if(!root) return [];
        let queue=[{node : root, level : 0}], ans=[];
        let map = new Map();
        while(queue.length>0){
            let length = queue.length;
            for(let i=0;i<length;i++){
                const {node, level} = queue.shift();
                if(!map.has(level)) map.set(level, []);
                map.get(level).push(node.val);

                if(node.left) queue.push({node : node.left, level : level-1});
                if(node.right) queue.push({node : node.right, level : level+1});
            }
        }
        const sorted_keys = [...map.keys()].sort((a,b)=>a-b);
        for(let key of sorted_keys){
            ans.push(map.get(key));
        }
        return ans;
    }
}
