/*Write an algorithm that runs through an array of integers and sets the largest and smallest value within
the array.*/

function higherOrLower(vect) {
    let higher;
    let lower;
    for (let i = 0; i < vect.length; i++) {
        if (higher === undefined && lower === undefined) {
            higher = vect[i];
            lower = vect[i];
        } else {
            if (vect[i] > higher) {
                higher = vect[i];
            }
            if (vect[i] < lower) {
                lower = vect[i];
            }
        }
    }
    return [higher, lower];
}

vect = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];

console.log(higherOrLower(vect));