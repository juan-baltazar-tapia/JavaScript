// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight.
//  If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

//Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight,
//  respectively. Both functions should return a value in the range 0..1439.

//You may not use javascript's Date class methods.
function afterMidnight(string){
    const hour = string[0] === '0' ? Number(string[1]) : Number(string.slice(0,2))
    const minute = string[3] === '0' ? Number(string[4]) : Number(string.slice(3))
    const totalMinute = hour * 60 + minute
    return totalMinute % 1440;
}

function beforeMidnight(string){
    const hour = string[0] === '0' ? Number(string[1]) : Number(string.slice(0,2))
    const minute = string[3] === '0' ? Number(string[4]) : Number(string.slice(3))
    
    return (1440 - (hour * 60 + minute)) % 1440
}
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);