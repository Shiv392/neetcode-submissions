class TrieNode{
    constructor(){
        this.children = {};
        this.is_end = false;
        this.word = null;
    }
}
class Trie{
    constructor(){
        this.trie = new TrieNode();
    }
    add(word){
        let node = this.trie;
        for(let char of word){
            if(!node.children[char]) node.children[char] = new TrieNode();
            node = node.children[char];
        }
        node.is_end = true;
        node.word = word;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let trie = new Trie(), ans=[];
        let m=board.length, n=board[0].length;
        for(let word of words){
            trie.add(word);
        }
        let directions = [[-1,0],[1,0],[0,-1],[0,1]];
        const dfs = (row, col, node)=>{
            if(row<0 || col<0 || row>=m || col>=n || board[row][col]=='#'){
                return;
            }

            let char = board[row][col];
            if(!node.children[char]) return;

            node = node.children[char];
            if(node.is_end){
                ans.push(node.word);
                node.is_end = false;
            }

            board[row][col] = '#';
           for(let [dx, dy] of directions){
            const new_row = row+dx, new_col = col+dy;
            dfs(new_row, new_col, node);
            }

            board[row][col]=char;
        }
        for(let row=0; row<m; row++){
            for(let col=0; col<n; col++){
                dfs(row, col, trie.trie)
            }
        }
        return ans;
    }
}
