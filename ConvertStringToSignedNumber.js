// In the previous exercise, you developed a function that converts simple numeric strings to integers. 
// In this exercise, you're going to extend that function to work with signed numbers.

//Write a function that takes a string of digits and returns the appropriate number as an integer. 
// The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

//You may assume the string will always contain a valid number.

//You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). 
// You may, however, use the stringToInteger() function from the previous lesson.
function stringToInteger(string) {
    // have a sum, for every digit, return that digit * position, so that it adds up to the sum
    let sum = 0;
    
    string.split('').forEach((num,index) => {
        let currSum;
        currSum = digit(num) * (10 ** (string.length - index - 1))
        //console.log(currSum)
        sum += currSum
    });
    return sum   
}

function digit(char) {
    return char.charCodeAt(0) - '0'.charCodeAt(0);
}

function stringToSignedInteger(string){
    const sign = string.chartAt(0)
    const unsignedDigit = (sign === '-' || sign === '+') ? string.slice(1) : string;

    return sing === '-' ? -(stringToInteger(unsignedDigit)) : stringToInteger(unsignedDigit)
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true