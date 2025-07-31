//Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.
let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(matrix) {
  const result = [];
  for (let column = 0; column < matrix[0].length; column++) {
    //console.log(column)
    const newRow = [];
    for (let row = matrix.length-1; row >= 0; row--) {
      //console.log(matrix[row][column]);
     // console.log(row, column)
      newRow.push(matrix[row][column]);
    }
    result.push(newRow);
  }
  return result;
}

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3); // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
