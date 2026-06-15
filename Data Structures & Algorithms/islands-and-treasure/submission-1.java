class Cell{
    int row, col, step;
    Cell(int row, int col, int step){
        this.row = row;
        this.col = col;
        this.step = step;
    }
}

class Solution {
    private static final int[][]DIRECTIONS = {{0,1},{0,-1},{1,0},{-1,0}};
    private static final int INF = 2147483647;
    public void islandsAndTreasure(int[][] grid) {
        int m=grid.length, n=grid[0].length;
        Queue<Cell>queue = new LinkedList<>();
        for(int row=0; row<m; row++){
            for(int col=0; col<n; col++){
                if(grid[row][col]==0){
                    queue.offer(new Cell(row, col, 1));
                }
            }
        }
        while(!queue.isEmpty()){
            int size = queue.size();
            for(int i=0;i<size;i++){
                Cell cell = queue.poll();
                for(int[]direction : DIRECTIONS){
                    int dx=direction[0], dy=direction[1];
                    int newRow=cell.row+dx, newCol=cell.col+dy;
                    if(newRow>=0 && newRow<m && newCol>=0 && newCol<n && 
                    grid[newRow][newCol]==INF
                    ){
                        grid[newRow][newCol]=Math.min(grid[newRow][newCol], cell.step);
                        queue.offer(new Cell(newRow, newCol, cell.step+1));
                    }
                }
            }
        }
    }
}
