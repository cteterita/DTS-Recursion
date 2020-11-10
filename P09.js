/*
9. Find ALL the ways out of the maze

Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?
*/

let smallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function isValidMove(maze, x, y) {
  // check if this spot is out of bounds
  if (x<0 || y<0) return false;
  if (x>=maze.length) return false;
  if (y>=maze[x].length) return false;

  // check if this spot is blocked
  if (maze[x][y] === '*') return false;

  // check if spot is already visited
  if (maze[x][y] === '.') return false;

  return true;
}

function printAllPaths(maze, x=0, y=0, pathString='') {

  // check if we're at the end yet
  if (maze[x][y] === 'e') {
    // print the valid path
    console.log('Path to the exit :', pathString); 
    console.log(maze); 
    return;
  }

  // mark this spot as visited
  maze[x][y] = '.';

  // Try going right
  if (isValidMove(maze,x,y+1)) {
    printAllPaths(maze,x,y+1,`${pathString}R`);
  }

  // Try going down
  if (isValidMove(maze,x+1,y)) {
    printAllPaths(maze,x+1,y,`${pathString}D`);
  }

  // Try going left
  if (isValidMove(maze,x,y-1)) {
    printAllPaths(maze,x,y-1,`${pathString}L`);
  }

  // Try going up
  if (isValidMove(maze,x-1,y))  {
    printAllPaths(maze,x-1,y,`${pathString}U`);
  }
}

printAllPaths(maze);
