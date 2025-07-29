// Write a function that displays an 8-pointed star in an NxN grid, where N is an odd integer that is supplied as an argument to the function. 
// The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).
function star(number){
    if (number < 7) return 'Invalid Number';
    //middle will always be n
    // top and bottom will always be 3
    // 7 -> 3
    // 9 -> 4
    //floor(n / 2) layers
    // star 
    // 7 -> 2 (7-3) 4/2 ->
    // 7 -> 1
    // 7 -> 0

    // 9 -> 3. (9-3) 6/2 ->3
    // 9 -> 2
    // 9 -> 1
    // 9 -> 0
    // to subtract = 
    const result = []
    const linesToPop = []

    for (let i = 0; i<Math.floor(number/2); i++){
        const firstStar = ' '.repeat(i) 
       
        const otherStars = '*' +  ' '.repeat((number-3-(i*2))/ 2)
        const line = firstStar + otherStars.repeat(3)
        result.push(line)
        linesToPop.push(line)
    }
    result.push('*'.repeat(number));
    const length = linesToPop.length;
    for (let i = 0; i<length; i++ ){
        result.push(linesToPop.pop())
    }
    return result.join('\n')

}
console.log(star(7));
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

console.log(star(9));
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *