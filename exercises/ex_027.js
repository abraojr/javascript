//Read an array of integers and print out how many are even and how many are odd.

function evenOrOdd(numberVect) {
    let qntyEven = 0;
    let qntyOdd = 0;
    for (let i = 0; i < numberVect.length; i++) {
        if (numberVect[i] % 2 == 0) {
            qntyEven++;
        } else {
            qntyOdd++;
        }
    }
    console.log(`${qntyEven} even numbers and ${qntyOdd} odd numbers.`);
}

vect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
evenOrOdd(vect);