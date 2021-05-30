/*Make a function that takes an array of numbers and returns an array that has all the numbers that are even
and also have even indices*/

//solution 1
function evenNumbers1(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i += 2) {
        const evenNumber = numbers[i] % 2 === 0;
        if (evenNumber)
            result.push(numbers[i]);
    }
    return result;
}

console.log(evenNumbers1([1, 2, 3, 4]));

//solution 2
function evenNumbers2(numbers) {
    return numbers.filter((numbers, index) => {
        const evenNumber = numbers % 2 === 0;
        const evenIndex = index % 2 === 0;
        return evenNumber && evenIndex;
    })
}

console.log(evenNumbers2([10, 70, 22, 43]));