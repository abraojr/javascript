/* Make a function that takes two numbers and returns whether the first is greater than or equal to the second.
It should differentiate numbers from strings.*/

function greaterThanOrEqual(first, second) {
    if (typeof first != typeof second) return false;
    return first >= second;
}

console.log(greaterThanOrEqual(0, 0));
console.log(greaterThanOrEqual(0, '0'));
console.log(greaterThanOrEqual(5, 1));