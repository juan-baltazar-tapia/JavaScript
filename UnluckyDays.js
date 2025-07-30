//Some people believe that Fridays that fall on the 13th day of the month are unlucky days.
// Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.
function fridayThe13ths(year) {
  // for every 13th of each month, find if its a friday.
  let sum = 0;
  const monthNumbers = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];


  for (const monthNumber of monthNumbers) {
    const date = new Date(year, monthNumber, 13);
    
    const day = date.getDay();
    if (day === 5) {
      sum++;
    }
  }
  return sum;
}
console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
