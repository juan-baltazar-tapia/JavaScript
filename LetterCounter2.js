// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.
function cleanWord(string){
    let cleanWord = '';
    for (let i = 0; i<string.length; i++){
        let char = string.charAt(i);

        if (/^[a-zA-Z]$/.test(char)){
            cleanWord += char;
        }

    }
    return cleanWord.length;
}

function wordSizes(string){
    if (string.length === 0){
        return {};
    }
    const words = string.split(' ')
    const object = {}
    for (let i = 0; i<words.length; i++){
        let cleanWordLength = cleanWord(words[i]);
        object[cleanWordLength.toString()] = (object[cleanWordLength.toString()] || 0)  + 1;
    }
    return object;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}