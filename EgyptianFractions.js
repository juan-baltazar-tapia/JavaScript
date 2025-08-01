// Write two functions: one that takes a Rational number as an argument, and returns an Array of the denominators
//  that are part of an Egyptian Fraction representation of the number, and another that takes an Array of numbers in the 
// same format, and calculates the resulting Rational number.
const Fraction = require('fraction.js');
//onsole.log(Fraction(2,1)) // Returns 1
// function egyptian(fraction){
//     const result = [];
//     // 2 = 1/1 + 1/2 + 1/3 + 1/6;
//     let x = new Fraction(1.88);
// let res = x.toFraction(true); 
// 3 = 1/1 + 1/2

// }

function unegyptian(array){
    let sum = 0;
    for (const num of array){
        sum += 1/num
    }
    return sum;
}

function egyptian(rational) {
  const result = [];
  let remaining = rational;
  let denominator = 1;

  while (remaining > 1e-10) {
    if (1 / denominator <= remaining) {
      result.push(denominator);
      remaining -= 1 / denominator;
    }
    denominator += 1;
  }

  return result;
}

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3