// Write a program that solicits six numbers from the user and logs a message that describes
//  whether the sixth number appears among the first five numbers.
const prompt = require('prompt-sync')();
const firstNum = prompt('Enter the 1st number: ')
const secondNum = prompt('Enter the 2nd number: ')
const thirdNum = prompt('Enter the 3rd number: ')
const fourthNum = prompt('Enter the 4th number: ')
const fifthNum = prompt('Enter the 5th number: ')
const sixthNum = prompt('Enter the 6th number: ')

const mySet = new Set([firstNum, secondNum, thirdNum, fourthNum, fifthNum]);
const values = [...mySet];
console.log( mySet.has(sixthNum) ? `The number ${sixthNum} appears in ${values}` : `The number ${sixthNum} does not appear in ${values}`)
