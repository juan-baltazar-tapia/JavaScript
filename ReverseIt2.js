// Write a function that takes a string argument containing one or more words and returns a new string containing 
// the words from the string argument. All five-or-more letter words should have their letters in reverse order.
//  The string argument will consist of only letters and spaces. Words will be separated by a single space.

function reverseWords(string){
    const result = []
    string.split(' ').forEach(currentWord => {
        const finalWord = currentWord.length >= 5 ? reverseSingleWord(currentWord) : currentWord;
        result.push(finalWord)
    });
    return result.join(' ')
}

function reverseSingleWord(string){
    return string.split('').reverse().join('');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"