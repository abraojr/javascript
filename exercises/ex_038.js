/* Create a function that takes two vectors of equal size and swaps their elements so that the elements of
vectorA become the elements of vectorB and vice versa, and so on. Do the swap without using an auxiliary
variable*/

function changeValues(vectorA, vectorB) {
    if (vectorA.length == vectorB.length) {
        for (let i = 0; i < vectorA.length; i++) {
            vectorA[i] = vectorA[i] + vectorB[i];
            vectorB[i] = vectorA[i] - vectorB[i];
            vectorA[i] = vectorA[i] - vectorB[i];
        }
    } else {
        return 'Vectors of different sizes.';
    }

    console.log('New vector A: ' + vectorA);
    console.log('New vector B: ' + vectorB);
}

let vectorA = [1, 2, 3];
let vectorB = [4, 5, 6];

changeValues(vectorA, vectorB);