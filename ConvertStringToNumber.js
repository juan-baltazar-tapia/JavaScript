// The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer.
//  The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes.
//  parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

// Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.
// 
// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.
// 
// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the
//  old-fashioned way and calculate the result by analyzing the characters in the string.
function stringToInteger(string) {
    // have a sum, for every digit, return that digit * position, so that it adds up to the sum
    let sum = 0;
    
    string.split('').map((num,index) => {
        let currSum = digit(num) * (10 ** (string.length - index - 1))
        console.log(currSum)
        sum += currSum
    });
    return sum
    
}

function digit(char) {
    if (char === '1') {
        return 1;
    } else if (char === '2') {
        return 2;
    }
    else if (char === '3') {
        return 3;
    }
    else if (char === '4') {
        return 4;
    }
    else if (char === '5') {
        return 5;
    }
    else if (char === '6') {
        return 6;
    }
    else if (char === '7') {
        return 7;
    }
    else if (char === '8') {
        return 8;
    } else if (char === '9') {
        return 9;
    } else {
        return 0;
    }

}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true