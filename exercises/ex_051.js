/*Make a function that takes an object as a first parameter and, as a second parameter, the name of a property 
contained in that object. Then return a copy of that object without the property specified in the second 
parameter.*/

//solution 1
function removeProperty1(object, propertyName) {
    const copy = Object.assign({}, object);
    delete copy[propertyName];
    return copy;
}

//solution 2
function removeProperty2(object, propertyName) {
    const copy = { ...object };
    delete copy[propertyName];
    return copy;
}

console.log(removeProperty1({ a: 1, b: 2 }, 'a'));

const obj = Object.is(removeProperty2({
    id: 20,
    name: 'Pen',
    description: 'unfilled'
}, 'description'));

console.log(obj);