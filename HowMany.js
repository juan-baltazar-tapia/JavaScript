// Write a function that counts the number of occurrences of each element in a given array.
//  Once counted, log each element alongside the number of occurrences.
//  Consider the words case sensitive e.g. ("suv" !== "SUV").
function countOccurrences(array){
    const map = new Map();
    array.forEach(element => {
        map.set(element, map.get(element) ? map.get(element) + 1 : 1)
    });
    return map
}




let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1