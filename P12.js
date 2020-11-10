/*
12. Binary Representation

Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.
*/

function findBinary(n) {
    if (n === 0 ) {
        return `0`;
    }
    if (n === 1) {
        return `1`;
    }
    return `${findBinary(parseInt(n/2))}${n%2}`;
}

console.log(findBinary(15));