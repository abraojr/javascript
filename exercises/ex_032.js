/*Create three vectors. Each of these vectors must contain four values, the first with integer values, the 
second with string values, and the third with decimal values. Once the vectors are declared, use the concat() 
join function in two different ways to join the vectors, and show the result in the console. All the elements
of the result array should appear on the console.*/

let vectorOfIntegers = [1, 2, 3, 4];
let vectorOfStrings = ['Arthur', 'Christian', 'Yuri', 'Galdino'];
let vectorOfDouble = [1.1, 2.2, 3.3, 4.4];

function concatenate(..._args) {
    result = [];
    for (let i = 0; i < arguments.length; i++) {
        result = result.concat(arguments[i])
    }
    return result;
}

console.log(concatenate(vectorOfIntegers, vectorOfDouble));
console.log(concatenate(vectorOfDouble, vectorOfStrings));