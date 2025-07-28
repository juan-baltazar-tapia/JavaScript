//Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.
function diamond(number) {
  if (number % 2 === 0 || number < 1) {
    return "Invalid Number";
  }
  const pattern = [];
  for (let i = 1; i <= number; i += 2) {
    const whiteSpaceMultiplier = (number - i) / 2;
    const whiteSpace = " ".repeat(whiteSpaceMultiplier);
    const stars = "*".repeat(i);
    const line = whiteSpace + stars + whiteSpace;
    console.log(line);
    pattern.push(line);
  }

  // last line pushed will only need to be logged once, not twice
  pattern.pop();
  const totalTimes = pattern.length;
  for (let i = 0; i < totalTimes; i++) {
    console.log(pattern.pop());
  }
}

diamond(1);
// // logs
// // *
diamond(3);
// logs
//  *
// ***
//  *
//  *
diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
