/*
1. Counting Sheep

Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
*/

function jumpSheep(n) {
  if (n < 1) {
    console.log('All sheep jumped over the fence');
    return 0;
  }

  console.log(`${n}: Another sheep jumps over the fence`);
  jumpSheep(n-1);
}

jumpSheep(3);
