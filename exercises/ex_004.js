/*Create a function that will receive two values, the dividend and the divisor. The function should print the
result and the remainder of the division of these two values.*/

function division(a, b) {
    if (b == 0) {
        console.log('Division by zero is not defined.')
    }
    else {
        console.log(`Result: ${Math.floor(a / b)}, Division remainder: ${a % b}`);
    }
}

division(4, 2);
division(1, 2);
division(0, 2);
division(1, 0);
division(0, 0);