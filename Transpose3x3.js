//A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:
// 1  5  8
// 4  7  2
// 3  9  6
// let matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];
// 1  4  3
// 5  7  9
// 8  2  6
function matrixTranspose(matrix){
    const result = []
    for (let column = 0; column < 3; column++){
        const newRow = []
        for (let row = 0; row< 3; row++){
            console.log(matrix[row][column]);
            newRow.push(matrix[row][column]);
        }
        result.push(newRow)
    }
    return result;

}
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = matrixTranspose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]