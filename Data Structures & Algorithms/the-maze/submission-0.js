class Solution {
    /**
     * @param {number[][]} maze
     * @param {number[]} start
     * @param {number[]} destination
     * @return {boolean}
     */
    hasPath(maze, start, destination) {
        let m=maze.length, n=maze[0].length;
        let directions = [[-1,0],[1,0],[0,-1],[0,1]];
        let queue=[start], visited = Array.from({length : m}, ()=> new Array(n).fill(false));
        visited[start[0]][start[1]]=true;
        while(queue.length>0){
            let [row, col] = queue.shift();
            if(row == destination[0] && col == destination[1]) return true;

            for(let [dx, dy] of directions){
                let x=row, y=col;
                while((x+dx>=0) && (x+dx<m) && (y+dy>=0) && (y+dy<n) && 
                maze[x+dx][y+dy] == 0
                ){
                x = x+dx;
                y = y+dy;
                }

                if(!visited[x][y]){
                    visited[x][y]=true;
                    queue.push([x,y]);
                }
            }
        }
        return false;
    }
}
