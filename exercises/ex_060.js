/*Make a function that takes an array of numbers and returns the smallest number in the array.*/

//solution 1
function smallestNumber1(numbers) {
    let smallest = numbers[0];
    for (let i in numbers)
        if (numbers[i] < smallest)
            smallest = numbers[i];
    return smallest;
}

const array1 = [10, 5, 65, 35];
console.log(smallestNumber1(array1));

//solution 2
function smallestNumber2(numbers) {
    return numbers.reduce((previous, current) => previous < current ? previous : current);
}

const array2 = [5, 15, 50, 3];
console.log(smallestNumber2(array2));

//solution 3
function smallestNumber3(numbers) {
    return Math.min(...numbers);
}

const array3 = [100, 5, 0.5, 0, 200];
console.log(smallestNumber3(array3));