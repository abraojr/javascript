/*Make a function that takes a number corresponding to a year and returns whether it is leap or not*/

//solution 1
function checkLeapYear1(year) {
    const divisibleByFour = year % 4 == 0;
    const divisibleByOneHundred = year % 100 == 0;
    const divisibleByFourHundred = year % 400 == 0;
    return (divisibleByFour && !divisibleByOneHundred) || divisibleByFourHundred;
}

console.log(checkLeapYear1(2020));

//solution 2: it is checked indirectly, verifying if the month of February of the given year has 29 days
function checkLeapYear2(year) {
    return new Date(year, 1, 29).getDate() === 29;
}

console.log(checkLeapYear2(2100));