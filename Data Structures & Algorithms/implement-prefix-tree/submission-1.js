class TrieNode{
    constructor(){
        this.children = {};
        this.is_end = false;
    }
}
class PrefixTree {
    constructor() {
        this.trie = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.trie;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode(char);
            }
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
        for(let char of word){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return node.is_end ? true : false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.trie;
        for(let char of prefix){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}
