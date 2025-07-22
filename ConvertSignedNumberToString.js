// In the previous exercise, you developed a function that converts non-negative numbers to strings. 
// In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

// Write a function that takes an integer and converts it to a string representation.
// 
// You may not use any of the standard conversion functions available in JavaScript, such as 
// String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.
// 
// You might also want to check the Math.sign() function.
function integerToString(num) {
  if (num === 0) return "0";

  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = "";

  while (num > 0) {
    let rightMostDigit = num % 10;
    result = DIGITS[rightMostDigit] + result;
    num = Math.floor(num / 10);
  }
  return result;
}

function signedIntegerToString(number){
    if (number === 0) return '0';
    //console.log(sign);
    let sign = number > 0 ? '+' : '-';
    let unsignedNumber = Math.abs(number);
    return sign + integerToString(unsignedNumber);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");