//Storing a function in a variable
const printSum = function (a, b) {
    console.log(a + b);
}

printSum(2, 3);

//Storing an arrow function in a variable
const sum = (a, b) => {
    return a + b;
}

console.log(sum(7, 2));

//Implicit return
const subtraction = (a, b) => a - b;
console.log(subtraction(10, 5));

const print2 = a => console.log(a);
print2("Hello");