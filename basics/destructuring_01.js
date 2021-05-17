//new feature in ES6

const person = {
    Name: 'Abrão',
    age: 21,
    addres: {
        street: 'ABC Street',
        number: 1000
    }
};

const { Name, age } = person;
console.log(Name, age);

const { Name: n, age: a } = person;
console.log(n, a);

const { lastName, married = true } = person;
console.log(lastName, married);

const { addres: { street, number, city } } = person;
console.log(street, number, city);