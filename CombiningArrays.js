// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. 
// There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. 
// You may assume that both arguments will always be arrays.
// Assuming both arrays ARE NOT sorted

function union(array1, array2){
    const mySet = new Set();
    let result = []
    array1.forEach(element => {
        if (!mySet.has(element)){
            result.push(element)
            mySet.add(element)
        }
    });
    array2.forEach(element => {
         if (!mySet.has(element)){
            result.push(element)
            mySet.add(element)
        }
    });
    return result;

}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]