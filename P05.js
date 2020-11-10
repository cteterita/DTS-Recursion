/*
5. String Splitter

Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.
*/

function split(string, splitter) {
  const splitIndex = string.indexOf(splitter);
  if (splitIndex < 0) {
    return [string];
  }
  return [string.slice(0, splitIndex), ...split(string.slice(splitIndex+1),splitter)];
}

console.log(split('11/09/20', '/'));
