class TrieNode{
    constructor(){
        this.children = {};
        this.is_end = false;
    }
}
class WordDictionary {
    constructor() {
        this.trie = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.trie;
        for(let char of word){
            if(!node.children[char]) node.children[char] = new TrieNode(char);
            node = node.children[char];
        }
        node.is_end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.trie;
        const dfs = (node, index)=>{
            if(index == word.length) return node.is_end;

            let char = word[index];
            if(char == '.'){
            for(let child in node.children){
                if(dfs(node.children[child], index+1)) return true;
            }
            return false;
            }
            else{
                if(!node.children[char]) return false;
                node = node.children[char];
                 return dfs(node, index+1);
            }
        }
        return dfs(node, 0);
    }
}
