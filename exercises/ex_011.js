//Make an algorithm that calculates the factorial of a number.

function factorial(number) {
    let factorialNumber = 1;
    for (let i = 1; i <= number; i++) {
        factorialNumber *= i;
    }
    return factorialNumber;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));