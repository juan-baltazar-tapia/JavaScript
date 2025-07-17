//Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, 
// then construct a list of words and place them into the story, creating an often silly or funny story as a result.

//Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.
const prompt = require('prompt-sync')();
const noun = prompt('Enter a noun: ')
const verb = prompt('Enter a verb: ')
const adjective = prompt('Enter a adjective: ')
const adverb = prompt('Enter an adverb: ')
console.log(`Do you ${verb} your ${noun} ${adjective} ${adverb} I get it`)