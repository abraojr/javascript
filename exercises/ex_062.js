/*Make a function that takes a string as a parameter and counts how many words are in it.*/

function countWords(phrase) {
    const words = phrase.split(" ");
    return words.length;
}

console.log(countWords('Hello, good morning'));
console.log(countWords('How many words are in this sentence?'));