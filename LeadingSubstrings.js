// Write a function that takes a string argument and returns a list of substrings of that string.
// Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.
function leadingSubstrings(string) {
  const result = string.split("").map((_, index) => string.slice(0, index + 1));
  return result;
}
console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
