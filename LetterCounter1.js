// Write a function that takes a string consisting of zero or more space separated words and returns an object
//  that shows the number of words of different sizes.

//Words consist of any sequence of non-space characters.
function wordSizes(string){
    //split string into an array
    // find length of each word
    // add to a dictionary, where += value, for each key (length)
    if (string.length === 0) return {};
    
    const array = string.split(' ');
    const map = new Map();
    for (let i = 0; i<array.length; i++){
        let length = array[i].length.toString();
        // if (key) value exists in map, get current value += 1, update
        // else add key value, 1
        if (map.has(length)){
            let updatedValue = map.get(length) + 1;
            map.set(length, updatedValue)
        } else {
            map.set(length, 1)
        }
        
    }
    return map
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}