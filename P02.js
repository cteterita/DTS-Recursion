/*
2. Power Calculator

Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
*/

function powerCalculator(n, i) {
  if (i === 0) {
    return 1;
  } else if (i < 0) {
    console.log('exponent should be >= 0');
    return false;
  }
  return n*powerCalculator(n, i-1);
}

console.log(powerCalculator(3,4));
