/*The rules for calculating leap years are as follows:
Every 4 years is a leap year;
Every 100 years is not a leap year;
Every 400 years is a leap year; 
The latter rules prevail over the former. Based on this, develop a function that receives a year and calculates
whether it is a leap year, printing the message on the console and returning true or false.*/

function leapYear(year) {
    if (year <= 0) {
        return false
    } else if (year % 400 == 0) {
        return true
    } else if (year % 100 == 0) {
        return false
    } else if (year % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(leapYear(0));
console.log(leapYear(4));
console.log(leapYear(100));
console.log(leapYear(400));
console.log(leapYear(800));
console.log(leapYear(2020));
console.log(leapYear(2021));
