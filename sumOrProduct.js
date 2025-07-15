// Write a program that asks the user to enter an integer greater than 0, 
// then asks whether the user wants to determine the sum or the product 
// of all numbers between 1 and the entered integer, inclusive.
const prompt = require('prompt-sync')();
const integer = prompt("Please enter an integer greater than 0: ");
const operation = prompt(`Enter "s" to compute the sum, or "p" to compute the product. `);
let output = 0;
if (operation === "s"){
    for (let index = 0; index <= integer; index++) {
        output += index   
    }
    console.log(`The sum of the integers between 1 and ${integer} is ${output}.`)
}
else {
    output = 1
    for (let index = 1; index <= integer; index++) {
        output *= index;
    }
    console.log(`The product of the integers between 1 and ${integer} is ${output}.`)
}
