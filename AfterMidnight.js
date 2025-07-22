// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, 
// the time is after midnight. If the number of minutes is negative, the time is before midnight.

//Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). 
// Your function should work with any integer input.

//You may not use javascript's Date class methods.

//Disregard Daylight Savings and Standard Time and other complications.

function timeOfDay(number){
    if (number === 0){
        return "00:00";
    }
    const MINUTESINADAY = 1440;
    //all values are converted to a valid range — even negatives
    const time = ((number % MINUTESINADAY) + MINUTESINADAY) % MINUTESINADAY;
    const hour = Math.floor(time / 60);
    const minute = time % 60
    // const hourDecimal = time / 60;
    // const hourDecString = (Math.floor(hourDecimal) % 24).toString();
    // const minuteDecString = (time % 60).toString();
    // const hour = hourDecString.length < 2 ? '0' + hourDecString : hourDecString;
    // const minute = minuteDecString.length < 2 ? '0' + minuteDecString : minuteDecString;
    const paddedHour = hour.toString().padStart(2, '0');
    const paddedMinute = minute.toString().padStart(2, '0');
    console.log(`${paddedHour}:${paddedMinute}`)
    return `${paddedHour}:${paddedMinute}`
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

