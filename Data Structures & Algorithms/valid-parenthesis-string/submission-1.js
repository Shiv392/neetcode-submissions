class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let length=s.length,openstack=[],starstack=[];
        for(let i=0;i<length;i++){
          if(s[i]=='(') openstack.push(i);
          else if(s[i]=='*') starstack.push(i);
          else{
            if(openstack.length>0) openstack.pop();
            else if(starstack.length>0) starstack.pop();
            else return false;
          }
        }
        while(openstack.length>0 && starstack.length>0){
            if(openstack[openstack.length-1]>starstack[starstack.length-1]) return false;
            openstack.pop();
            starstack.pop();
        }
        return openstack.length==0;
    }
}
