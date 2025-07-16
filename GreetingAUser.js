// Write a program that will ask for user's name. The program will then greet the user. If the
//  user writes "name!" then the computer yells back to the user.
const prompt = require('prompt-sync')();
const userInput = prompt('Hello, what is your name?');
if (userInput[userInput.length-1] === "!"){
    const name = userInput.slice(0,-1).toUpperCase();
    console.log(`HELLO ${name}, WHY ARE WE SCREAMING?`)
} else {
    console.log(`Hello ${userInput}`)
}
