/*Make a function that takes two non-negative integers (greater than or equal to zero) and performs their 
multiplication. However, do not use the mutiplication operator*/

//solution 1
function multiply1(numberA, numberB) {
    let result = 0;
    /* the optimization done to decrease the amount of recursive calls can be done here to decrease the
    amount of loops */
    for (let i = 0; i < numberB; i++)
        result += numberA;
    return result;
}

console.log(multiply1(5, 5));

//solution 2
function multiply2(number, multiplier) {
    if (number === 0 || multiplier === 0) return 0;
    return multiplier === 1 ? number : number + multiply2(number, multiplier - 1);
}

console.log(multiply2(7, 7));

//solution 3
function multiply3(numberA, numberB) {
    if (numberA === 0 || numberB === 0) return 0;
    const largerNumber = Math.max(numberA, numberB);
    const smallerNumber = Math.min(numberA, numberB);
    function recursivelyMultiply(number, multiplier) {
        return (
            multiplier === 1 ?
                number :
                number + recursivelyMultiply(number, multiplier - 1)
        );
    }
    /*in this version, we guarantee that the multiplier will be the smallest number, so there will be minimal 
    recursive calls*/
    return recursivelyMultiply(largerNumber, smallerNumber);
}

console.log(multiply3(5, 6));
