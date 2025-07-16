//Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const prompt = require('prompt-sync')();
const currAge = Number(prompt('What is your current age? '));
const retirementAge = Number(prompt('At what age would you like to retire? '))
const currentYear = new Date().getFullYear();
const yearsToRetire = (retirementAge - currAge);
console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToRetire}`)
console.log(`You only have ${yearsToRetire} years of work to go!`)