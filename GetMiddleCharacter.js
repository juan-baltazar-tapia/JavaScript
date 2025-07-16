//Write a function that takes a non-empty string argument and returns the middle character(s) of the string. 
// If the string has an odd length, you should return exactly one character. If the string has an even length,
//  you should return exactly two characters.
function centerOf(string){
    const middleIndex = Math.floor(string.length / 2) - 1;
    return string.length % 2 === 0 ? string.slice(middleIndex, middleIndex + 2) : string.charAt(middleIndex+1);
}
// asdFghj 6 -> 2-3
// 3
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

