// person -> 123 -> {...}
const person = { name: 'John' };
person.name = 'Peter';
console.log(person);

//person -> 456 -> {...}
//person ={name: 'Ana'} -> Error

Object.freeze(person); // makes a constant object

person.name = 'Mary';
person.address = '1st Street';
delete person.name;

console.log(person.name);
console.log(person);

const constantPerson = Object.freeze({ name: 'John' });
constantPerson.name = 'Mary';
console.log(constantPerson);