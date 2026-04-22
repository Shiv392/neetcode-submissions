class TrieNode{
    constructor(){
        this.children={};
        this.isEnd=false;
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    insert(word){
        let node=this.root;
        for(let char of word){
          if(!node.children[char]){
            node.children[char]=new TrieNode();
          }
          node=node.children[char];
        }
        node.isEnd=true;
    }
    search(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]) return false;
            node=node.children[char];
        }
        return node.isEnd;
    }
}
class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
    let trie=new Trie(),n=s.length;
    for(let word of wordDict){
        trie.insert(word);
    }
    const dp=new Array(n+1).fill(false);
    dp[0]=true;
    for(let i=1;i<=n;i++){
        for(let j=0;j<i;j++){
            if(dp[j] && trie.search(s.substring(j,i))){
                dp[i]=true;
                break;
            }
        }
    }
    return dp[n];
    }
}
