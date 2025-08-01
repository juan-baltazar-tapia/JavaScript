// 
function merge(array1, array2){
    const result = []
    let i = 0, j = 0;

    while (i < array1.length && j < array2.length){
        const a = array1[i];
        const b = array2[j];
        if (a > b){
            result.push(b);
            j++;
        } else {
            result.push(a);
            i++;
        }
    }
    if (i >= array1.length){
        return result.concat(array2.slice(j));
    } else {
        return result.concat(array1.slice(i));
    }
}

function mergeSort(array){
    if (array.length <= 1) return array;

     let middle = Math.floor(array.length / 2);
     let leftArray = array.slice(0, middle);
     let rightArray = array.slice(middle);

     let sortedLeft = mergeSort(leftArray);
     let sortedRight = mergeSort(rightArray);

     return merge(sortedLeft, sortedRight);

}
console.log(mergeSort([9, 5, 7, 1]));               // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                     // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));            // [1, 2, 4, 6, 7]
console.log(mergeSort([9, 2, 7, 6, 8, 5, 0, 1]));   // [0, 1, 2, 5, 6, 7, 8, 9]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]