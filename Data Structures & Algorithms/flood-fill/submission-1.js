class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        let m = image.length, n=image[0].length;
        let cell_color = image[sr][sc];
        if(cell_color == color) return image;
        let directions = [[-1,0], [1,0], [0,-1],[0,1]];
        const dfs = (row, col)=>{
            if(row<0 || col<0 || row>=m || col>=n || image[row][col]!=cell_color){
                return;
            }
            image[row][col]=color;

            for(let [x,y] of directions){
                const new_row = x+row;
                const new_col = y+col;
                dfs(new_row, new_col);
            }
        }
        dfs(sr, sc);
        return image;
    }
}
