/*Write an algorithm that goes through an array of integers, counts how many negative numbers there are in 
that array, and prints the amount to the console.*/

function negativeNumbers(vect) {
    let qntyNegative = 0;
    for (let i = 0; i < vect.length; i++) {
        if (vect[i] < 0) {
            qntyNegative++;
        }
    }
    return qntyNegative;
}

vect = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9];

console.log(negativeNumbers(vect));