// Write a function that rotates the last count digits of a number. 
// To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits
//  to the left.
function rotateArray(array){
    if (!Array.isArray(array)) return undefined;
    if (array.length === 0) return [];
    if (array.length === 1) return array;
    const result = array.slice(1).concat(array.slice(0,1));
    return result;
}

function rotateRightmostDigits(number, count){
    const numberString = number.toString();
    const countStringArray = numberString.slice(numberString.length - count).split('')
    const secondHalfArray = rotateArray(countStringArray)
    const firstHalf = numberString.slice(0,numberString.length - count )
    return(Number(firstHalf + secondHalfArray.join('')))
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917