// Write a function that takes a string, doubles every consonant character in the string, and returns
//  the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
function doubleConsonants(string){
    // if a-zA-Z AND NOT a,e,i,o,u
    const mySet = new Set(['a','e','i','o','u'])
    const result = []
    for (const char of string){
        if (!mySet.has(char) && /[a-zA-Z]/.test(char)){
            result.push(char + char);
        } else {
           result.push(char);
        }
    }
    return result.join('');
}
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""