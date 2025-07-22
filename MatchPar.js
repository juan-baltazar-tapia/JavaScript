// Write a function that takes a string as an argument and returns true if all parentheses in
// the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.
function areParenthesesBalanced(string) {
  const stack = [];

  for (const char of string) {
    //console.log(char)
    if (char === "(") {
        stack.push(char)
    } else if (char === ")" ) {
      if (stack.length === 0){
        return false;
      }
      stack.pop()
    } 
  }
  return stack.length === 0;
}

console.log("(", areParenthesesBalanced("(") ? "Balanced" : "Not Balanced"); // Expected: Not Balanced
console.log(")", areParenthesesBalanced(")") ? "Balanced" : "Not Balanced"); // Expected: Not Balanced
console.log("(()", areParenthesesBalanced("(()") ? "Balanced" : "Not Balanced"); // Expected: Not Balanced (missing a closing parenthesis)
console.log("())", areParenthesesBalanced("())") ? "Balanced" : "Not Balanced"); // Expected: Not Balanced (extra closing parenthesis)
console.log(")()(", areParenthesesBalanced(")()(") ? "Balanced" : "Not Balanced"); // Expected: Not Balanced (misplaced parentheses)
console.log("((", areParenthesesBalanced("((") ? "Balanced" : "Not Balanced"); // Expected: Not Balanced
console.log("))", areParenthesesBalanced("))") ? "Balanced" : "Not Balanced"); // Expected: Not Balanced
console.log("((())))(", areParenthesesBalanced("((())))(", ) ? "Balanced" : "Not Balanced"); // Expected: Not Balanced
console.log("                   ")
// Balanced examples
console.log("()", areParenthesesBalanced("()") ? "Balanced" : "Not Balanced"); // Expected: Balanced
console.log("(())", areParenthesesBalanced("(())") ? "Balanced" : "Not Balanced"); // Expected: Balanced
console.log("()()", areParenthesesBalanced("()()") ? "Balanced" : "Not Balanced"); // Expected: Balanced
console.log("((()))", areParenthesesBalanced("((()))") ? "Balanced" : "Not Balanced"); // Expected: Balanced
console.log("abc(def(ghi)jkl)mno", areParenthesesBalanced("abc(def(ghi)jkl)mno") ? "Balanced" : "Not Balanced"); // Expected: Balanced
console.log("", areParenthesesBalanced("") ? "Balanced" : "Not Balanced"); // Expected: Balanced (empty string has balanced parentheses)
console.log("no parentheses here", areParenthesesBalanced("no parentheses here") ? "Balanced" : "Not Balanced"); // Expected: Balanced

