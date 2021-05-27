/*Make a function that takes four numbers as parameters (number, minimum, maximum, inclusive) and returns if 
the parameter number (the first one) is between minimum and maximum. When the inclusive parameter is true, 
have "between" as inlusive, i.e., considering whether number is equal to min or max. If the inclusive parameter
is not entered, its default value must be false, so the logic will be exclusive, not considering whether number
is equal to min or max.*/

//solution 1
function isBetween1(min, max, number, inclusive = false) {
    if (inclusive) return number >= min && number <= max;
    return number > min && number < max;
}

console.log(isBetween1(10, 100, 50));
console.log(isBetween1(16, 100, 150));

//solution 2
function isBetween2(min, max, number, inclusive = false) {
    return inclusive ? number >= min && number <= max : number > min && number < max;
}

console.log(isBetween2(3, 150, 3));
console.log(isBetween2(3, 150, 3, true));
