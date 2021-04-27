// function without return
function printSum(a, b) {
    console.log(a + b);
}

printSum(2, 3); //OUTPUT: 5
printSum(2); //OUTPUT: NaN
printSum(2, 10, 4, 5, 6, 7, 8); //OUTPUT: 12
printSum(); //OUTPUT: NaN


// function with return
function sum(a, b = 0) {
    return a + b;
}

console.log(sum(2)); //OUTPUT: 2
console.log(sum(2, 3)); //OUTPUT: 5