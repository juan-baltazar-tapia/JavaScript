// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise.
//  A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.
function isPalindrome(string){
    // split function and half, reverse second half
    // const midPoint = Math.floor(string.length / 2);
    // const firstHalf = string.slice(0,midPoint);
    // const secondHalf = string.length % 2 === 0 ? string.slice(midPoint) : string.slice(midPoint + 1);
    // const secondHalfReversed = secondHalf.split('').reverse().join('');
    // return firstHalf === secondHalfReversed;
    const reverse = string.split('').reverse().join('');
    return string === reverse;
}
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

