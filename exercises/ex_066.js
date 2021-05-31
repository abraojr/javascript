/*Make a function that receives an object as a parameter and returns another object that corresponds to the 
object received as a parameter, but with the key positions and values reversed.*/

//solution 1
function reverse1(object) {
    const reversedObject = {};
    Object.entries(object).forEach(keyValuePair => {
        const key = 0,
            value = 1
        reversedObject[keyValuePair[value]] = keyValuePair[key]
    });
    return reversedObject;
}

const obj1 = { a: 1, b: 2, c: 3 };
console.log(reverse1(obj1));

//solution 2
function reverse2(object) {
    const reversedKeyValuePair = Object.entries(object)
        .map(keyValuePair => keyValuePair.reverse());
    return Object.fromEntries(reversedKeyValuePair);
}

const obj2 = { name: 'Abrão', age: 21 };
console.log(reverse2(obj2));