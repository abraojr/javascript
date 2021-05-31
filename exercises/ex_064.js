/* Make a function that takes as first parameter a word and as second parameter an array of strings. The 
function should filter the words in the array that contain in them the string of the first parameter. 
Identifying similar words.*/

//solution 1
function searchSimilarWords1(start, words) {
    const result = [];
    for (let word of words)
        if (word.includes(start))
            result.push(word);
    return result;
}

const array1 = ['programming', 'mobile', 'professional'];
console.log(searchSimilarWords1('pro', array1));

//solution 2
function searchSimilarWords2(start, words) {
    return words.filter(word => word.includes(start));
}

const array2 = ['javascript', 'java', 'c++'];
console.log(searchSimilarWords2('java', array2));