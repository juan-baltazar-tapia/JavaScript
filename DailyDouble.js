// Write a function that takes a string argument and returns a new string that conta
// ins the value of the original string with all consecutive duplicate characters collapsed into a single character.

function crunch(string){
    let output = '';
    //use two pointers
    let leftPointer = 0;
    let rightPointer = 1;
    while (rightPointer <= string.length){
        if (string.charAt(leftPointer) !== string.charAt(rightPointer)){
        output = output + string.charAt(leftPointer)
        }
        leftPointer += 1;
        rightPointer += 1;
    }

    return output
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
console.log(crunch("aab"));