class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack=[], parts = path.split('/');
        for(let part of parts){
            if(part=='' || part=='.') continue;
            else if(part=='..'){
                stack.length && stack.pop();
            }
            else{
                stack.push(part);
            }
        }
        return '/'+stack.join('/');
    }
}
