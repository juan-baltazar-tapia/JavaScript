//Professor Graham wrote some simple code to help him determine the average and median scores on each of his quarterly exams, but some of the test cases are failing. Figure out why, and write the code necessary for the program to work as expected.

function average(nums) {
  let sum = nums.reduce((total, num) => total + num);

  return sum / nums.length;
}

function median(nums) {
  nums.sort((a,b)=> a-b);
  //console.log(nums)

  let median;
  let length = nums.length;
  if (length % 2 === 0) {
    // 0 1 2 3 4 5 
    //.    . .
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }
  //console.log(median)
  return median;
}

// Tests

let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// should all log 'true':
console.log(average(quarter1ExamScores) === 86.8);
console.log(average(quarter2ExamScores) === 86.3);
console.log(average(quarter3ExamScores) === 83.7);
console.log(average(quarter4ExamScores) === 88.8);

console.log(median(quarter1ExamScores) === 89.5);
console.log(median(quarter2ExamScores) === 89.5);
console.log(median(quarter3ExamScores) === 87);
console.log(median(quarter4ExamScores) === 89.5);