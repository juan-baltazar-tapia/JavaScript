// Write a function that takes a string as an argument and returns that string with a staggered
//  capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a 
// lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.
function staggeredCase(string){

    return [...string].map((char, index) => {
        if (index % 2 === 0 && /[a-zA-Z]/.test(char)){
            return char.toUpperCase()
        } else if (index % 2 === 1 && /[a-zA-Z]/.test(char)) {
            return char.toLowerCase()
        } else {
            return char;
        }
    }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"