/*Make a function that takes an array of numbers and returns the sum of all the numbers in that array.*/

//solution 1
function sumNumbers1(numbers) {
    const qntyOfNumbers = numbers.length;
    return (qntyOfNumbers === 0) ? 0 : numbers[0] + sumNumbers1(numbers.slice(1));
}

const array1 = [10, 10, 10];
console.log(sumNumbers1(array1));

//solution 2
function sumNumbers2(numbers) {
    let sum = 0;
    numbers.forEach(number => sum += number);
    return sum;
}

const array2 = [15, 15, 15, 15];
console.log(sumNumbers2(array2));

//solution 3
function sumNumbers3(numbers) {
    const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
    return sum;
}

const array3 = [45, 45, 45, 45, 45, 45];
console.log(sumNumbers3(array3));