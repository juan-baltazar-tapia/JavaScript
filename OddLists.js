// Write a function that returns an Array that contains every other element of an Array that is 
// passed in as an argument. The values in the returned list should be those values that are in the 1s
// t, 3rd, 5th, and so on elements of the argument Array.
function oddities(array){
    return array.filter( (element, index) => index % 2 === 0)
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []