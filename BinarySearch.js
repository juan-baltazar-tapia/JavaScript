// Implement binary Search
// Implement a binarySearch function that takes an array and a searchItem as arguments, and returns the index of the searchItem if found, or -1 otherwise. You may assume that the array argument will always be sorted.
let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

function binarySearch(array, item){
    let l = 0, r = array.length;
    while (l <= r){
        const middle = Math.floor((l + r) / 2);
        if (array[middle] === item){
            return middle;
        } else if (array[middle] > item){
            r = middle - 1;
        } else {
            l = middle + 1;
        }
    }
    return -1;
}
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6