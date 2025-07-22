// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

//You may assume that every word contains at least one letter, and that the string will always contain at least one word. 
// You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or 
// repeated spaces.
function swap(string){
    //for every word, select first and last letter, swap and reinsert into a string using arrow functions

    //edge case of string of length 1 for efficiency
    if (string.length === 1) {
        return string
    }

    let array = []
    string.split(' ').forEach(word => {
        let firstLetter = word.charAt(0);
        let lastLetter = word.charAt(word.length-1);
        //console.log(firstLetter + ' ' +  lastLetter)
        const newWord = word.length >=2 ? lastLetter + word.slice(1,word.length-1) + firstLetter : word
        array.push(newWord)
    });
    return array.join(' ')
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"