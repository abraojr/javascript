/*Make a function that receives as parameter a vector of grades and shows the concepts of each one so that
from 0.0 to 4.9 so that from 0.0 to 4.9 is assigned concept D, from 5.0 to 6.9 is assigned concept C, from 7.0 
to 8.9 is assigned concept B and from 9.0 to 10.0 is assigned concept A.*/

function conceptGrades(grades) {
    let concepts = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 0 && grades[i] <= 4.9) {
            concepts.push('D');
        } else if (grades[i] >= 5 && grades[i] <= 6.9) {
            concepts.push('C');
        } else if (grades[i] >= 7 && grades[i] <= 8.9) {
            concepts.push('B');
        } else if (grades[i] >= 9 && grades[i] <= 10) {
            concepts.push('A');
        } else {
            concepts.push('Invalid grade.');
        }
    }
    return concepts;
}

let grades = [10, 13, 9, 8.2, 2.5, 7.7, 6.8];
let concepts = conceptGrades(grades);

console.log(concepts);