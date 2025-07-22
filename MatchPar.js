// Write a function that takes a string as an argument and returns true if all parentheses in
// the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.
function isBalanced(string) {
  const stack = [];
  let result = true;
  for (const char of string) {
    //console.log(char)
    if (char !== "(" || char !== ")") {
        //console.log(char)
      continue;
    } else if (char === ")" && stack.length > 0 && stack.pop() === "(") {
      continue;
    } else {
      result = false;
      break;
    }
  }
  return stack.length === 0 && result;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
