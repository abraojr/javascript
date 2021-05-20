/* Write two functions that are given three parameters: initial capital, interest rate, and application time.
A first function will return the amount of the financial application under the simple interest,and a second 
function will return the application amount under the compound interest.*/

function simpleInterest(initialAmount, tax, period) {
    finalAmount = initialAmount * (1 + (period * (tax / 100)));
    console.log(`R$ ${finalAmount.toFixed(2)}`);
}

function compoundInterest(initialAmount, tax, period) {
    finalAmount = initialAmount * (1 + (tax / 100)) ** period;
    console.log(`R$ ${finalAmount.toFixed(2)}`);
}

simpleInterest(100, 2, 2);
compoundInterest(100, 2, 2);
simpleInterest(100, 10, 2);
compoundInterest(100, 10, 2);