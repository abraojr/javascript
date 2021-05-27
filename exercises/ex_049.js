/*Write a function that takes a number as a parameter and returns a string with the symbol "+" in the 
specified in the parameter.*/

//solution 1
function plusSimbol1(qnty) {
    let result = '';
    for (let i = 0; i < qnty; i++) {
        result += '+';
    }
    return result;
}

console.log(plusSimbol1(2));

//solution  2
function plusSimbol2(qnty) {
    return Array(qnty).fill('+').join('');
}

console.log(plusSimbol2(4));

//solution 3
function plusSimbol3(qnty) {
    return "+".repeat(qnty);
}

console.log(plusSimbol3(8));