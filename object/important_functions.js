const person = {
    name: 'Abrão',
    age: 21,
    weight: 60
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
})

Object.defineProperty(person, 'birthDate', {
    enumerable: true,
    writable: false,
    value: '01/01/2000'
});

person.birthDate = '01/01/2001';
console.log(person.birthDate);
console.log(Object.keys(person));

// Object.assign (ES6)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);