// The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both 
// operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey 
// value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be
//  truthy: the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is
//  truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.
function xor(valueOne, valueTwo){
    return Boolean(valueOne) !== Boolean(valueTwo)
}


console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true
console.log(xor(1, 2));     // Returns true (should be false - both are truthy)
console.log(xor("a", "b")); // Returns true (should be false - both are truthy)