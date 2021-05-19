function Person(name) {
    this.name = name;

    this.speake = function () {
        console.log(`My name is ${name}.`);
    }
}
const p1 = new Person('John');
p1.speake();
console.log(p1.name);