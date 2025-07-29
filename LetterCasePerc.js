//Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.
function letterPercentages(string){
    let upperCaseSum = 0;
    let lowerCaseSum = 0;
    let neitherSum = 0;
    string.split('').forEach(letter => {
        {
            if (/[a-z]/.test(letter)){
                lowerCaseSum +=1
            } else if (/[A-Z]/.test(letter)){
                upperCaseSum += 1;
            } else {
                neitherSum += 1
            }
        }
        
    });
    const upperCase = ((upperCaseSum / string.length) * 100).toFixed(2);
    const lowerCase = ((lowerCaseSum / string.length) * 100).toFixed(2);
    const neither = ((neitherSum / string.length) * 100).toFixed(2);
    return {
        lowercase: lowerCase,
        uppercase: upperCase,
        neither: neither
    }
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
