/*Make a function that takes as parameter an object and returns an array of arrays, where each element is an 
array formed by key/value pairs that corresponds to an attribute of the object.*/

//solution 1
function objectToArray1(object) {
    const result = [];
    for (let key in object)
        result.push([key, object[key]]);
    return result;
}

const obj1 = {
    name: 'John',
    profession: 'Teacher'
};
console.log(objectToArray1(obj1));

//solution 2
function objectToArray2(object) {
    const keys = Object.keys(object);
    const result = keys.map(keys => [keys, object[keys]]);
    return result;
}

const obj2 = {
    name: 'Abrão',
    profession: 'Software Developer'
};
console.log(objectToArray2(obj2));

//solution 3
function objectToArray3(object) {
    return Object.entries(object);
}

const obj3 = {
    code: 11111,
    price: 12800
};
console.log(objectToArray3(obj3));