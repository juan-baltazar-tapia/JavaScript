Things to Work on
Use more descriptive names in functions.
Instead of 
function greetings(array, object)
USE
function createGreeting(nameArray, personInfo)
Use JS specific methods instead of iterating through strings, arrays, objects, etc
nameArray.join(' '); instead of a for loop
Extract things from object before using them.
  // Extract title from the object
    const title = personInfo.title;

Use arrow notation when possible instead of
function multiply(numberOne, numberTwo){
    return numberOne * numberTwo;
}
Do
const multiply = (numberOne, numberTwo) => numberOne * numberTwo;

Filter Review
The filter() method is a powerful array method in JavaScript that creates a new array with all elements that pass a test implemented by a provided function.
const newArray = array.filter(callback(element, index, array), thisArg)

To Review:
Daily Double without two pointers.
Letter Counter (Part 1) (with more modern approach)

