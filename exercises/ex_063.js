/*Make a function that takes a character and a string as parameters and returns the number of times the 
character repeats in the string. The function must be case sensitive.*/

//solution 1
function countCharacter1(character, phrase) {
    let counter = 0;
    for (let i = 0; i < phrase.length; i++)
        if (phrase.charAt(i) === character)
            counter++;
    return counter;
}

console.log(countCharacter1('o', 'Fortune favors the bold'));

//solution 2
function countCharacter2(characterSearched, phrase) {
    return [...phrase].filter(character => character === characterSearched).length;
}

console.log(countCharacter2('w', 'Know Yourself'));