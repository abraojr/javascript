// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Literal Notation Improvements

const pName = 'Abrão';
const person = {
    pName,
    hello() {
        return 'Hello guys!';
    }
}
console.log(person.pName, person.hello());

// Class
class Animal { }
class Cat extends Animal {
    speak() {
        return 'Meow'
    }
}

console.log(new Cat().speak());