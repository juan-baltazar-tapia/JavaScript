// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.
function featured(number) {
  const startingPoint = findNextMultiple(number);

  for (let i = startingPoint; i <= 9876543201; i += 7) {
    if (isFeaturedNumber(i)) {
      return i;
    }
  }
  return "There is no possible number that fulfills those requirements.";
}

function isFeaturedNumber(number) {
  return number % 2 === 1 && number % 7 === 0 && isUnique(number);
}

function findNextMultiple(number) {
  let next = Math.floor(number / 7) * 7 + 7;
  while (next % 2 === 0) {
    next += 7;
  }
  return next;
}


function isUnique(number) {
  const mySet = new Set();
  const digitArray = number.toString().split("");
  for (const number of digitArray) {
    if (mySet.has(number)) {
      return false;
    }
    mySet.add(number);
  }
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997)); // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
