const notAnArray = { 0: 'Abrão', 1: 'Bob', 2: 'Carl' };
console.log(notAnArray);
Object.defineProperty(notAnArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
});

console.log(notAnArray[0]);

const myArray = ['Abrão', 'Bob', 'Carl'];
console.log(notAnArray.toString(), myArray);