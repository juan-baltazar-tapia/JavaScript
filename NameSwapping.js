// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a 
// new string consisting of the last name, a comma, a space, and the first name.
function swapName(string){
    const name = string.split(' ');
    return `${name[1]}, ${name[0]}`
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
