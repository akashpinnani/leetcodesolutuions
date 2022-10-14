/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    if(!grid.length) {
        return 0;
    }
    let totalIsLands = 0;
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[i].length;j++) {
            if(grid[i][j] === '1') {
                totalIsLands += 1;
                markGrid(i,j, grid);
            }
        }
    }
    return totalIsLands;
    
};

function markGrid(i,j, grid) {
    if(i<0 || j<0 || grid.length <= i || grid[i].length <= j || grid[i][j] !== '1') {
        return;
    }
    grid[i][j] = '#';
    markGrid(i+1, j, grid);
    markGrid(i-1, j, grid);
    markGrid(i, j+1, grid);
    markGrid(i, j-1, grid);
}