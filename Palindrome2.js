// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
// This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. 
// If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.
function isRealPalindrome(string){
    //iterate trough, and lowercase, remove non alphanumeric characters
    let cleanedString = '';
    for (let i=0; i<string.length; i++){
        let char = string.charAt(i).toLowerCase();
        if (/^[a-zA-Z0-9]$/.test(char)){
            cleanedString += char;
            //console.log(newString)
        }
    }
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
       
}
console.log(isRealPalindrome('madam'));              // true
console.log(isRealPalindrome('Madam'));               // true )(case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only) alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false