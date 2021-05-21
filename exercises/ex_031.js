//Build an algorithm that calculates the arithmetic mean of the values of a vector of integers.

function average(vect) {
    let sum = 0;
    for (let i = 0; i < vect.length; i++) {
        sum += vect[i];
    }

    return sum / vect.length;
}

vect = [1, 2, 3, 4, 5];

console.log(average(vect));