/*Make a function that takes two parameters: the first is an array of numbers and the second is a number that 
specifies a number of digits. This function should return only those numbers in the array that have the number 
of digits specified by the second parameter.*/

//solution 1
function filterByNumberOfDigits1(numbers, desiredAmount) {
    let result = [];
    for (number of numbers) {
        const qntyOfDigits = String(number).length;
        if (qntyOfDigits === desiredAmount)
            result.push(number);
    }
    return result;
}

const array1 = [38, 2, 365, 10, 125, 11];
console.log(filterByNumberOfDigits1(array1, 2));

//solution 2
function filterByNumberOfDigits2(numbers, desiredAmount) {
    return numbers.filter(number => {
        const qntyOfDigits = String(number).length;
        return qntyOfDigits === desiredAmount;
    });
}

const array2 = [5, 9, 1, 125, 11];
console.log(filterByNumberOfDigits2(array2, 1));