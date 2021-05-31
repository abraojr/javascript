/*Make a function that takes as parameter a number from 1 to 10. Internally in the function a random number 
from 1 to 10 will be generated. The function should return if the input parameter was equal to the internally 
drawn number. If the supplied value was the drawn number, return "Congratulations! The number drawn was X". 
If it is not equal, return "Too bad! The number drawn was X". X is the number that was drawn.*/

function drawnNumber(chosenNumber) {
    const min = 1;
    const max = 10;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return (chosenNumber === randomNumber ?
        `Congratulations! The number draw was ${randomNumber}` :
        `Too bad! The number draw was ${randomNumber}`
    );
}

console.log(drawnNumber(10));
console.log(drawnNumber(5));
console.log(drawnNumber(3));