/*Create two functions that take two parameters, an array of only numeric values and an integer. Have the first
function return another array that will be the result of multiplying each element element by the number passed
as parameter. The second function will do the same as the first if and only if the value of the element is 
greater than 5.*/

let vect = [1, 2, 3, 4, 5];
let vect1 = [2, 4, 6, 8, 10, 12];

function multiplyVect(vect, multiplier) {
    let vectResult = [];
    vect.forEach(element => {
        vectResult.push(element * multiplier);
    });

    return vectResult;
}

console.log(multiplyVect(vect, 3));
console.log(multiplyVect(vect1, 3));
