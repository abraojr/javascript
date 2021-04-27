const grade1 = 1.0;
const grade2 = Number('2.0');

console.log(grade1, grade2);
console.log(Number.isInteger(grade1)); //OUTPUT: true
console.log(Number.isInteger(grade2)); //OUTPUT: true

const test1 = 9.871;
const test2 = 6.871;

const total = test1 * grade1 + test2 * grade2;
const average = total / (grade1 + grade2);

console.log(average.toFixed(2)); // For two decimal places
console.log(average.toString(2)); // Converting to binary
console.log(typeof average); //OUTPUT: number
console.log(typeof Number); //OUTPUT: function