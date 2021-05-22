const ferrari = {
    model: 'F40',
    maxSpeed: 324
};

const volvo = {
    model: 'V40',
    maxSpeed: 200
};

console.log(ferrari.prototype);
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype); // true
console.log(volvo.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true

function MyObject() { };
console.log(typeof Object, typeof MyObject);
console.log(Object.prototype, MyObject.prototype);