/*Write a function that takes a person's age in years and returns the same age in days.Note: consider that a 
year has 365 days. Disregard leap years (with 366 days) and also disregard days elapsed since the last birthday*/

function convertAge(ageInYears) {
    const daysOfTheYear = 365;
    return daysOfTheYear * ageInYears;
}

console.log(convertAge(25));
console.log(convertAge(50));
console.log(convertAge(90));
console.log(convertAge(100));