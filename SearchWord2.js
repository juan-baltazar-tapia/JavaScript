// The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.

//For this exercise, write a function that takes a word and some text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks ('**') on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').
const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, sed";

function searchWord(word, text) {
  const lowerCaseWord = word.toLowerCase();

  return (result = text
    .split(" ")
    .map((word) =>
      word.toLowerCase() === lowerCaseWord ? `**${word.toUpperCase()}**` : word
    )
    .join(" "));
}

console.log(searchWord("sed", text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ""
