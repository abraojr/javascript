/*Make a function that takes an array of numbers and returns the second largest number in the array.*/

//solution 1
function secondLargest1(numbers) {
    let indexOfTheLargest = 0;
    let secondLargest;
    numbers.forEach((number, index) => {
        if (number > numbers[indexOfTheLargest])
            indexOfTheLargest = index;
    });
    numbers.splice(indexOfTheLargest, 1);
    secondLargest = numbers[0];
    numbers.forEach(number => {
        if (number > secondLargest)
            secondLargest = number;
    });
    return secondLargest;
}

const array1 = [12, 16, 1, 5];
console.log(secondLargest1(array1));

//solution 2
function secondLargest2(numbers) {
    const largestNumber = Math.max(...numbers);
    numbers = numbers.filter(number => number != largestNumber);
    const secondLargest = Math.max(...numbers);
    return secondLargest;
}

const array2 = [8, 4, 5, 6];
console.log(secondLargest2(array2));

//solution 3
function secondLargest3(numbers) {
    const sortedNumbers = numbers.sort((numberA, numberB) => numberB - numberA);
    const secondLargest = sortedNumbers[1];
    return secondLargest;
}

const array3 = [12, 20, 8, 9, 14];
console.log(secondLargest3(array3));