/*Create two vectors called vectorStack and vectorAdd. Initially, vectorStack will contain five integer 
elements: [1, 2, 3, 4, 5]. You must add the values contained in vectorAdd [6, 7, 8, 9, 10] to the stack vector
and display them in the console. It is important to remember that the Push method returns only the size of the
array. At the end of the operations print the vectors on the console.*/

let vectStack = [1, 2, 3, 4, 5];
let vectAdd = [6, 7, 8, 9, 10];

function addVect(initialVect, vectAdd) {
    for (let i = 0; i < vectAdd.length; i++) {
        console.log(vectAdd[i])
        initialVect.push(vectAdd[i])
    }
    console.log('Added vector: ' + vectAdd)
    console.log('Result vector: ' + initialVect)
}

addVect(vectStack, vectAdd);