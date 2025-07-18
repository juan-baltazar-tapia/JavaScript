// Write a function that takes a year as input and returns the century. The return value should be a string that 
// begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

function century(year){
    // I need a function that will round up (ceiling function)
    // 2000/100 = 20
    // 2000/100 = 20.1 -> 21
    // 1965 / 100 = 19.65 -> 20
    // 10103 / 100 = 101.03 -> 102
    // Then any result that ends in 1 append st
    // Any result that ends in 2 append nd
    // any result that ends in 3 append rd
    // anything else append th
    let centuryNum = Math.ceil(year / 100);
    let century = centuryNum.toString();
    let lastDigit = centuryNum % 10;
    let lastTwoDigits = centuryNum % 100
    // console.log(typeof century, century)
    // console.log(typeof lastDigit, lastDigit)
    // Special cases: 11th, 12th, 13th (not 11st, 12nd, 13rd)
    if (lastTwoDigits >=11 && lastTwoDigits <= 13){
        return century + 'th';
    }

    switch (lastDigit) {
    case 1:
        return century + 'st';
    case 2:
        return century + 'nd';
    case 3:
        return century + 'rd';
    default:
        return century + 'th';
    }

}
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));        // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
console.log(century(11100));        // 111th
console.log(century(11200));        // 112th
console.log(century(11300));        // 113th
