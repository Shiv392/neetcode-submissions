class TrieNode{
    constructor(){
        this.children = {};
        this.is_end = false;
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
    }
    search_prefix(word){
        let node = this.trie;
        for(let char of word){
            if(!node.children[char]) return false;
            node = node.children[char];
            if(node.is_end) return true;
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string[]} words
     * @param {string} pref
     * @return {number}
     */
    prefixCount(words, pref) {
        let trie = new Trie(), cnt=0;
        trie.add(pref);
        for(let word of words){
        if(trie.search_prefix(word)) cnt++;
        }
        return cnt;
    }
}
