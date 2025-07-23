// Write a function that takes a string as an argument and returns that string with every lowercase 
// letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
function isUppercase(char) {
  return char === char.toUpperCase()  && /[A-Z]/.test(char);
}

function isLowerCase(char) {
  return char === char.toLowerCase()  && /[a-z]/.test(char);
}


function swapCase(string){
    const stringArray = [...string];
    const result = []
    //console.log(stringArray)
    for (const char of stringArray){
        //console.log(char)
        if (isUppercase(char)){
            result.push(char.toLowerCase())
           // console.log(char.toLowerCase())
        } else if (isLowerCase(char)){
            //console.log(char.toUpperCase())
            result.push(char.toUpperCase())
        } else {
            result.push(char)
        }
    }
    return result.join('')
}
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"s