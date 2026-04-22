class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
            let n=points.length,distance=[];
    for(let i=0;i<n;i++){
        const [x,y]=points[i];
        const curr_distance=x**2+y**2;
        distance.push([Math.sqrt(curr_distance),points[i]]);
    }
    distance.sort((a,b)=>a[0]-b[0]);
    let ans=[],i=0;
    while(i<k){
        ans.push(distance[i][1]);
        i++;
    }
    return ans;
    }
}
