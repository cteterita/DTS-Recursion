/*
3. Reverse String

Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
*/

function reverse(string) {
  if (string.length === 1) {
    return string;
  }
  return reverse(string.slice(1)) + string[0];
}

console.log(reverse('palindrome'));
