/*Make a function that takes an array with an indeterminate number of numbers and returns the simple average 
of these numbers.*/

//solution 1
function average1(numbers) {
    const qntyOfNumbers = numbers.length;
    let totalSum = 0;
    for (number of numbers) {
        totalSum += number;
    }
    return totalSum / qntyOfNumbers;
}

console.log(average1([0, 10]));

//solution 2
function average2(numbers) {
    const qntyOfNumbers = numbers.length;
    const totalSum = numbers.reduce((numberA, numberB) => numberA + numberB);
    return totalSum / qntyOfNumbers;
}

console.log(average2([1, 2, 3, 4, 5]));