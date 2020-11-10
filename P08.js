/*
8. Find a way out of the maze

You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.
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

  // check if this spot is blocked or already visited
  if (maze[x][y] === '*' || maze[x][y] === '.') return false;

  return true;
}

function navigateMaze(maze, x=0, y=0, pathString='') {

  // check if we're at the end yet
  if (maze[x][y] === 'e') return pathString;

  // mark this spot as visited
  maze[x][y] = '.';

  // Try going right
  if (isValidMove(maze,x,y+1)) {
    pathString = `${pathString}R`;
    return navigateMaze(maze,x,y+1,pathString);
  }

  // Try going down
  if (isValidMove(maze,x+1,y)) {
    pathString = `${pathString}D`;
    return navigateMaze(maze,x+1,y,pathString);
  }

  // Try going left
  if (isValidMove(maze,x,y-1)) {
    pathString = `${pathString}L`;
    return navigateMaze(maze,x,y-1,pathString);
  }

  // Try going up
  if (isValidMove(maze,x-1,y))  {
    pathString = `${pathString}U`;
    return navigateMaze(maze,x-1,y,pathString);
  }
}

console.log(navigateMaze(maze));
