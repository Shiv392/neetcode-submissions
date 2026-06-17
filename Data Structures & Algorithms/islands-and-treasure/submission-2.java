class Cell{
    int row, col, distance;
    Cell(int row, int col, int distance){
        this.row = row;
        this.col = col;
        this.distance = distance;
    }
}
class Solution {
    private static final int INF = 2147483647;
    private static final int[][]DIRECTIONS = {{1,0},{-1,0},{0,1},{0,-1}};

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
            Cell cell = queue.poll();
            for(int[]direction : DIRECTIONS){
                int dx=direction[0], dy=direction[1];
                int newRow = dx+cell.row, newCol=dy+cell.col;
                if(newRow>=0 && newRow<m && newCol>=0 && newCol<n && grid[newRow][newCol]==INF
                ){
                    grid[newRow][newCol]=Math.min(grid[newRow][newCol], cell.distance);
                    queue.offer(new Cell(newRow, newCol, 1+cell.distance));
                }
            }
        }

    }
}
