// In the previous two exercises, you developed functions that convert simple numeric strings to signed integers.
// In this exercise and the next, you're going to reverse those functions.

//Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string
//  representation of that integer.

//You may not use any of the standard conversion functions available in JavaScript, such as String(),
//  Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way
//  and construct the string by analyzing and manipulating the number.
function integerToString(num) {
  //isolate each number, going right to left using % and division by 10 with Math.floor
  // use a number to digit mapper
  // mod by 10, Math.floor(new number = num / 10)
  // Repeat while num >
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

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"
