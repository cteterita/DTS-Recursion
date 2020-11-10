/*
10. Anagrams

An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".
*/

function findAnagrams(string) {
    if (string.length === 1) return [string];
    let returnArray = [];
    for (let i = 0; i < string.length; i++) {
        let rAna = findAnagrams(string.slice(0,i) + string.slice(i+1)); // remove this character and find anagrams of the rest
        returnArray = returnArray.concat(rAna.map(a => string[i] + a)); // add this character to the beginning of all remaining anagrams
    }
    return returnArray;
}

console.log(findAnagrams('aets'));