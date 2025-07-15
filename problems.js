// Build a program that asks the user to enter the length and width of a room in meters, a
// //nd then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

 //Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
const prompt = require('prompt-sync')();

const length = prompt("Enter the length of the room in meters: ");

const width = prompt("Enter the width of the room in meters: ");

const areaMeters = length * width;
 const areaFeet = areaMeters * 10.7639;

console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`)