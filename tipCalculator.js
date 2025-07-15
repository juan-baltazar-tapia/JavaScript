// Create a simple tip calculator. The program should prompt for a bill amount 
// and a tip rate. The program must compute the tip, and then log both the tip and the total 
// amount of the bill to the console. You can ignore input validation and assume that the user will
//  enter valid positive numbers.
const prompt = require('prompt-sync')();
const bill = Number(prompt("What is the bill? "));
const tipRate = prompt("What is the rate percentage? ");
const tip = Number(bill * (tipRate / 100));
console.log(`The tip is $${tip}`);
console.log(`The total is $${bill + tip}`);