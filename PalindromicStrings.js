// Write a function that returns a list of all palindromic substrings of a string.
//  That is, each substring must consist of a sequence of characters that reads the same forward and backward. 
// The substrings in the returned list should be sorted by their order of appearance in the input string.
//  Duplicate substrings should be included multiple times.

//You may (and should) use the substrings function you wrote in the previous exercise.

//For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 
// 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.
function substrings(string){
    const subStrings = [...string].map((_,index) => leadingSubstrings(string.slice(index))).flat();
    return subStrings;
}

function leadingSubstrings(string) {
  return  [...string].map((_, index) => string.slice(0, index + 1));
}

function isPalindrome(string){
    if (string.length === 1) return false;
    const reverse = string.split('').reverse().join('');
    return string === reverse;
}

function palindromes(string){
    return substrings(string).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
