//You have a bank of switches before you, numbered from 1 to count. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them, that is, you flip every switch. All the lights are now on. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after count passes.

// Examples:

function lightsOn(count) {
  if (count === 1) {
    return [1];
  }
  const result = [];
  const lights = new Array(count).fill(true);

  for (let i = 2; i <= count; i++) {
    for (let j = i; j <= lights.length; j += i) {
      lights[j - 1] = !lights[j - 1];
    }
  }
  lights.forEach((bool, index) => {
    if (bool) {
      result.push(index + 1);
    }
  });
  return result;
}


console.log(lightsOn(5)); //[1,4]
// lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
