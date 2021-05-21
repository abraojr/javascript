/*Using the Switch structure make a program that simulates a basic calculator. The program receives as 
parameters two numerical values and a string referring to the operation and performs the operation with the 
numerical values in the order they were entered. For example: calculator (2, '+', 3). The function will 
perform the sum of 2 and 3. Tip: The signs of the operations are: '+' '-', '*' e '/'. Create a default case
for invalid operations.*/

function calculator(value1, operation, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 'Invalid Operation';
    }
}

console.log(calculator(2, '+', 3));
console.log(calculator(2, '-', 3));
console.log(calculator(2, '*', 3));
console.log(calculator(2, '/', 3));
console.log(calculator(2, 'a', 3));