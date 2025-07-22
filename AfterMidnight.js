// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, 
// the time is after midnight. If the number of minutes is negative, the time is before midnight.

//Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). 
// Your function should work with any integer input.

//You may not use javascript's Date class methods.

//Disregard Daylight Savings and Standard Time and other complications.

function timeOfDay(number){
    const MINUTESINADAY = 1440;
    //all values are converted to a valid range — even negatives
    const time = 1440 + (number % 1440)
    const hourDecimal = time / 60;
    const hourDecString = (Math.floor(hourDecimal) % 24).toString();
    const minuteDecString = (time % 60).toString();
    const hour = hourDecString.length < 2 ? '0' + hourDecString : hourDecString;
    const minute = minuteDecString.length < 2 ? '0' + minuteDecString : minuteDecString;
    return `${hour}:${minute}`
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

