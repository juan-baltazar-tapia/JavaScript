// Write a function that takes a string argument and returns true if all of the alphabetic 
// characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.
function checkUppercase(char){
    return char === char.toUpperCase();
}
function isUppercase(string){
    for (let i = 0; i<string.length; i++){
        const currChar = string.charAt(i);
        if (/[A-Za-z]/.test(currChar)){
            if (!checkUppercase(currChar)){
                return false;
            }
        }
    }
    return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true