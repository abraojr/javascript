/*Make a function that takes a string as a parameter and returns this string only with consonants, i.e.
without vowels.*/

//solution 1
function removeVowels1(phrase) {
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    vowels.forEach(vowel => phrase = phrase.replace(vowel, ''));
    return phrase;
}

console.log(removeVowels1('Coder'));

//solution 2
function removeVowels2(phrase) {
    return phrase.replace(/[aeiou]/ig, '');
}

console.log(removeVowels2('Hello world'));