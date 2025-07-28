//A collection of spelling blocks has two letters per block, as shown in this list:
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

function isBlockWord(word) {
  const letters = word.split("");
  let blocks = {
    B: "O",
    O: "B",
    X: "K",
    K: "X",
    D: "Q",
    Q: "D",
    C: "P",
    P: "C",
    N: "A",
    A: "N",
    G: "T",
    T: "G",
    R: "E",
    E: "R",
    F: "S",
    S: "F",
    J: "W",
    W: "J",
    H: "U",
    U: "H",
    V: "I",
    I: "V",
    L: "Y",
    Y: "L",
    Z: "M",
    M: "Z",
  };
  const lettersUsed = new Set();

  for (let letter of letters) {
    letter = letter.toUpperCase();
    if (lettersUsed.has(letter) || !blocks.hasOwnProperty(letter)) {
      return false;
    } else {
      lettersUsed.add(blocks[letter]);
      delete blocks[letter];
    }
    
  }
  return true;
}

// console.log(isBlockWord("BATCH")); // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true
console.log(isBlockWord("BARK"));   // true
console.log(isBlockWord("BOOK"));   // false (B:O and O:K conflict)
console.log(isBlockWord("TREAT"));  // false
console.log(isBlockWord("COMMON")); // false
console.log(isBlockWord("SQUAD"));  // false
console.log(isBlockWord("CONFUSE"));// false

