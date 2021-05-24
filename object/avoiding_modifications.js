//Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Any', price: 1.99, tag: 'promotion'
});
console.log('Extensible:', Object.isExtensible(product));

product.name = 'Eraser';
product.description = 'White school eraser';
delete product.tag;
console.log(product);

//Object.seal
const person = { name: 'Julius', age: 35 };
Object.seal(person);
console.log('Sealed:', Object.isSealed(person));

person.lastName = 'Rock';
delete person.name;
person.age = 45;
console.log(person);

//Object.freeze = sealed + constant values