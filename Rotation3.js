// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and 
// rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. 
// Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed 
// in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

//Write a function that takes an integer as an argument and returns the maximum rotation of that integer.
//  You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

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
    return(firstHalf + secondHalfArray.join(''))
}

function maxRotation(number){
    let numberString = number.toString();
    let currNumberString;

    for (let i = 0; i<numberString.length; i++){
        currNumberString = rotateRightmostDigits(Number(numberString), numberString.length-i)
        numberString = currNumberString
    }
    return Number(numberString);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

