//Write a function that determines the mean (average) of the three scores passed to it, and returns the letter
//  associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.
function getGrade(a,b,c){
    const score = Math.floor((a + b + c) / 3)

    if (90 <= score && score <= 100){
        return 'A';
    } else if (80 <= score ) {
        return 'B';
    } else if (70 <= score) {
        return 'C';
    } else if (60 <= score ) {
        return 'D';
    } else if (0 <= score) {
        return 'F';
    } else {
        return 'Invalid Score'
    }
}
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"